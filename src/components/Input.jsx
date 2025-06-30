import React from 'react'
import { useId } from 'react'

export const Input = React.forwardRef(({
    label,
    type = 'text',
    placeholder = '',
    className = '',
    ...props
},ref)=>{
    const Id = useId()
    return (
        
        <div className={`mb-4 ${className}`}>
            {label && 
            <label className={`inline-block mb-2 text-sm font-medium text-gray-700`} htmlFor={Id}>
                {label}
                </label>}
            <input
                type={type}
                placeholder={placeholder}
                className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                ref={ref}
                {...props}
            />
        </div>
    )
})