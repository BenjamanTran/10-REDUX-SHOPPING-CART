import { cartActions } from "./cart-slide"
import { uiActions } from "./ui-slice"

export const fetDataCart = () => {
  return async (dispatch) => {
    const fetData = async () => {
      const response = await fetch('https://fir-react-app-886c3-default-rtdb.firebaseio.com/cart.json')
      if (!response.ok) {
        throw new Error('Get data failed')
      }

      const data = await response.json()
      return data
    }

    try {
      const cartData = await fetData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Error fetch data in firebase'
        })
      )
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: 'sending',
      title: 'Sending',
      message: 'Sending data to firebaseio'
    }))

    const sendRequest = async () => {
      const response = await fetch('https://fir-react-app-886c3-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        })
      })
      if (!response.ok) {
        throw new Error('Sending data to firebaseio failed')
      }
    }
    try {
      await sendRequest()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Success sending cart data'
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Error sending cart data'
        }))
    }


  }
}
