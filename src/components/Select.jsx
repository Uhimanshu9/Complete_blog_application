//create a new React component named Select.jsx
// This component should return a div with the text "Select"

//since we will us it in different places we use forwardRef
import React, { forwardRef, useId } from 'react'

export const Select = forwardRef(({
    options,
    label,
    className,
    ...props
}, ref) => {
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className='text-sm font-medium text-gray-700'></label>}
            <select
                {...props}
                ref={ref}
                className={`block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${className}`}
                id={id}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                         {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
)