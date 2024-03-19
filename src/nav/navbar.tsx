import { useState } from 'react'
import './navbar.css'
function Navbar() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <div className='nav'>
        <div className='nav_item'>Angryy Avocado</div>
        <div>
          <a className='nav_a'>Home</a>
          <a className='nav_a'>Products</a>
          <a className='nav_a'>Contact</a>
        </div>
        <div className='nav_item'>user</div>
      </div>
    </>
  )
}

export default Navbar
