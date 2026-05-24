import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-sans font-bold tracking-wide transition-colors duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-moutarde text-charbon hover:bg-moutarde-vif',
        dark: 'bg-charbon text-creme hover:bg-moutarde hover:text-charbon',
        outline: 'border border-moutarde text-moutarde hover:bg-moutarde hover:text-charbon',
      },
      size: {
        default: 'px-7 py-3.5 text-[14px]',
        lg: 'px-10 py-4 text-[15px]',
        sm: 'px-5 py-3 text-[13px]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
