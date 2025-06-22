import React from 'react'
import './button.css'

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className = '', children, ...rest }) => {
  const classes = ['btn-primary', className].filter(Boolean).join(' ')
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default PrimaryButton
