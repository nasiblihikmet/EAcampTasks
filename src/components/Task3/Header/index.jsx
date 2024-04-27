import { useGlobalContext } from '../../../store/global/GlobalProvider'

function Header() {
  const {
    state: { basket },
  } = useGlobalContext()

  return (
    <div
      style={{
        display: 'flex',
        padding: '20px',
        backgroundColor: 'teal',
        justifyContent: 'space-around',
      }}
    >
      <div>About</div>
      <div>Home</div>
      <div>
        Basket
        <span style={{ backgroundColor: 'red', padding: '5px' }}>
          {basket}
        </span>
      </div>
    </div>
  )
}

export default Header