'use client'

import {useFormStatus} from 'react-dom'

export default function FormButton({children, className, ...props}) {
    const {pending} = useFormStatus();
    
    return (
        <button
        {...props}
        className={className ?? "inline-flex p-3 rounded justify-center bg-black text-white"}
        >
            {pending ? "loading..." : children}
        </button>
    );
}