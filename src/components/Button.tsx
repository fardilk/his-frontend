import React from 'react'
import './button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  isLoading = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = [
    'btn',
    variant ? `btn-${variant}` : '',
    fullWidth ? 'btn-full' : '',
    (disabled || isLoading) ? 'btn-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={disabled || isLoading} {...rest}>
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button
