import React from 'react'

export const baseButtonClasses =
  'px-4 py-2 rounded text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-blue-300'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  fullWidth?: boolean
  isLoading?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  ghost: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  success: 'bg-green-600 text-white hover:bg-green-700',
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  isLoading,
  disabled,
  className = '',
  children,
  ...props
}) => {
  const classes = [
    baseButtonClasses,
    variantClasses[variant],
    fullWidth && 'w-full',
    (disabled || isLoading) && 'opacity-50 cursor-not-allowed',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      disabled={disabled || isLoading}
      className={classes}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button
