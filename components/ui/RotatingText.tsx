"use client";
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { motion, AnimatePresence, type Transition, type Target, type VariantLabels, type AnimationControls, type TargetAndTransition } from 'framer-motion';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface RotatingTextRef { next: () => void; previous: () => void; jumpTo: (index: number) => void; reset: () => void; }
interface RotatingTextProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.span>, "children" | "transition" | "initial" | "animate" | "exit"> {
  texts: string[]; transition?: Transition; initial?: boolean | Target | VariantLabels; animate?: boolean | VariantLabels | AnimationControls | TargetAndTransition;
  exit?: Target | VariantLabels; animatePresenceMode?: "sync" | "wait"; animatePresenceInitial?: boolean; rotationInterval?: number;
  staggerDuration?: number; staggerFrom?: "first" | "last" | "center" | "random" | number; loop?: boolean; auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string; onNext?: (index: number) => void;
  mainClassName?: string; splitLevelClassName?: string; elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(({
  texts, transition = { type: "spring", damping: 25, stiffness: 300 },
  initial = { y: "100%", opacity: 0 }, animate = { y: 0, opacity: 1 }, exit = { y: "-120%", opacity: 0 },
  animatePresenceMode = "wait", animatePresenceInitial = false, rotationInterval = 2200,
  staggerDuration = 0.01, staggerFrom = "last", loop = true, auto = true, splitBy = "characters",
  onNext, mainClassName, splitLevelClassName, elementLevelClassName, ...rest }, ref) => {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const splitIntoCharacters = (text: string): string[] => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      try { const s = new Intl.Segmenter("fr", { granularity: "grapheme" }); return Array.from(s.segment(text), seg => seg.segment); }
      catch { return text.split(''); }
    }
    return text.split('');
  };
  const elements = useMemo(() => {
    const currentText: string = texts[currentTextIndex] ?? '';
    if (splitBy === "characters") {
      const words = currentText.split(/(\s+)/); let charCount = 0;
      return words.filter(p => p.length > 0).map((part) => {
        const isSpace = /^\s+$/.test(part); const chars = isSpace ? [part] : splitIntoCharacters(part);
        const startIndex = charCount; charCount += chars.length;
        return { characters: chars, isSpace, startIndex };
      });
    }
    if (splitBy === "words") return currentText.split(/(\s+)/).filter(w => w.length > 0).map((word, i) => ({ characters: [word], isSpace: /^\s+$/.test(word), startIndex: i }));
    return currentText.split(splitBy).map((part, i) => ({ characters: [part], isSpace: false, startIndex: i }));
  }, [texts, currentTextIndex, splitBy]);
  const totalElements = useMemo(() => elements.reduce((sum, el) => sum + el.characters.length, 0), [elements]);
  const getStaggerDelay = useCallback((index: number, total: number): number => {
    if (total <= 1 || !staggerDuration) return 0;
    const stagger = staggerDuration;
    switch (staggerFrom) {
      case "first": return index * stagger;
      case "last": return (total - 1 - index) * stagger;
      case "center": return Math.abs((total - 1) / 2 - index) * stagger;
      case "random": return Math.random() * (total - 1) * stagger;
      default: if (typeof staggerFrom === 'number') { return Math.abs(Math.max(0, Math.min(staggerFrom, total - 1)) - index) * stagger; } return index * stagger;
    }
  }, [staggerFrom, staggerDuration]);
  const handleIndexChange = useCallback((newIndex: number) => { setCurrentTextIndex(newIndex); onNext?.(newIndex); }, [onNext]);
  const next = useCallback(() => { const n = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1; if (n !== currentTextIndex) handleIndexChange(n); }, [currentTextIndex, texts.length, loop, handleIndexChange]);
  const previous = useCallback(() => { const p = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1; if (p !== currentTextIndex) handleIndexChange(p); }, [currentTextIndex, texts.length, loop, handleIndexChange]);
  const jumpTo = useCallback((index: number) => { const v = Math.max(0, Math.min(index, texts.length - 1)); if (v !== currentTextIndex) handleIndexChange(v); }, [texts.length, currentTextIndex, handleIndexChange]);
  const reset = useCallback(() => { if (currentTextIndex !== 0) handleIndexChange(0); }, [currentTextIndex, handleIndexChange]);
  useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [next, previous, jumpTo, reset]);
  useEffect(() => { if (!auto || texts.length <= 1) return; const id = setInterval(next, rotationInterval); return () => clearInterval(id); }, [next, rotationInterval, auto, texts.length]);
  return (
    <motion.span className={cn("inline-flex flex-wrap whitespace-pre-wrap relative align-bottom pb-[10px]", mainClassName)} {...rest} layout>
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.div key={currentTextIndex} className={cn("inline-flex flex-wrap relative", splitBy === "lines" ? "flex-col items-start w-full" : "flex-row items-baseline")} layout aria-hidden="true" initial="initial" animate="animate" exit="exit">
          {elements.map((el, ei) => (
            <span key={ei} className={cn("inline-flex", splitLevelClassName)} style={{ whiteSpace: 'pre' }}>
              {el.characters.map((char, ci) => {
                const globalIndex = el.startIndex + ci;
                return (<motion.span key={`${char}-${ci}`} initial={initial} animate={animate} exit={exit} transition={{ ...transition, delay: getStaggerDelay(globalIndex, totalElements) }} className={cn("inline-block leading-none tracking-tight", elementLevelClassName)}>{char === ' ' ? ' ' : char}</motion.span>);
              })}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.span>
  );
});
RotatingText.displayName = "RotatingText";
export default RotatingText;
