import React, { Children } from 'react'

export const Button = (
    {
        children,
        className = '',
        type = 'button',
        bgColor = 'bg-blue-500',
        textColor = 'text-white',
        ...props
    }
) => {
  return (
    <div className={`px-4 py-2 rounded-xl ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
        </div>
  )
}
