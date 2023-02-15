
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartAPI } from '../Features/cartSlice'

const Cart = () => {
    const [mapdata, setMapdata] = useState()
    let dispatch = useDispatch()

    const cartReducer = useSelector((state) => state.cartReducer)
    let { loading } = cartReducer
    let cart = cartReducer
    const list = cart.cart[0]
    // console.log("cart", cart)
    // console.log("data", [cart.cart[0]])
    useEffect(() => {
        dispatch(
            cartAPI()
        )
    }, [])
    useEffect(() => {

        {
            loading === true
                ?
                <h1>loading.....</h1>
                :
                setMapdata(cart)
        }
    }, [loading])
    console.log('nop', list)

    return (
        <>
            {
                loading
                    ?
                    <h1>Loading...</h1>
                    :
                    <div>
                        {
                            list.map((e, i) => {
                                console.log('e', e)
                                return (
                                    <>
                                        {e.id}
                                    </>
                                )
                            })
                        }
                    </div>
            }


        </>
    )
}

export default Cart
