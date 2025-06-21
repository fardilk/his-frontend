import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const base = 'px-4 py-2 rounded focus:outline-none focus:ring text-sm'
const variants = {
  primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
  secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`,
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => (
  <button className={`${variants[variant]} ${className}`} {...props}>
    {children}
  </button>
)

export default Button
