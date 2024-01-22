import React from 'react'

const CartWidget = () => {
    return(
        <>
            <a href="#" className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="darkgrey" className=' w-9 p-1 bg-neutral-600 rounded-full'>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                    <div>
                        <span className='w-5 h-5 text-sm text-center font-bold absolute -top-1 left-6 text-white rounded-full bg-purple-500'>3</span>
                    </div>
            </a>
        </>
    )
}

export default CartWidget;