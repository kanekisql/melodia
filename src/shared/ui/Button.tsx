import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonVariant = 'primary' | 'ghost'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    readonly variant?: ButtonVariant
  }
>

const variantClassName: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/90',
  ghost:
    'border border-border bg-surface/50 text-foreground-muted hover:border-border-strong hover:text-foreground',
}

export function Button({
  children,
  className = '',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${variantClassName[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
