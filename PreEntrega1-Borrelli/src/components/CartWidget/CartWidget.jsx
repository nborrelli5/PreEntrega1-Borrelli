import React from 'react'

const CartWidget = () => {
    return(
        <>
            {/* <img src="./src/assets/cart.svg" className='w-9 p-1 bg-neutral-600 rounded-full fill-white' alt="cart" /> */}
            <a href="#">
                <svg href='./src/assets/cart.svg' className='w-9 p-1 bg-neutral-600 rounded-full fill-white'></svg>
            </a>
        </>
    )
}

export default CartWidget;