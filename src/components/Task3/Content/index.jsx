import { useGlobalContext } from '../../../store/global/GlobalProvider'
import { TYPES } from '../../../store/global/types'

function Content() {
  const {
    state: { basket, price },
    dispatch,
  } = useGlobalContext()

  function handleIncrement() {
    dispatch({ type: TYPES.BASKET, payload: basket + 1 })
  }
  function handleDecrement() {
    if (basket <= 0) return
    dispatch({ type: TYPES.BASKET, payload: basket - 1 })
  }
  return (
    <div style={{ border: '1px solid black' }}>
      <img
        src="https://www.craftclothing.ph/cdn/shop/products/standard-plain-round-neck-shirt-white_a69ff83d-7778-45cc-9225-3cdca1327a21_600x.png?v=1644205060"
        alt="apple"
        width={300}
      />
      <div>
T-Shirt</div>
      <div> 5 $</div>
      <div
        style={{
          display: 'flex',
          padding: '20px',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        <button style={{ backgroundColor: 'green' }} onClick={handleIncrement}>
          +
        </button>
        <div style={{ fontSize: '28px' }}>{price * basket}</div>
        <button style={{ backgroundColor: 'red' }} onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  )
}

export default Content