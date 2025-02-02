import{ Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="bg py-5 px-3 h-40 bg-zinc-400 w-screen">
      <div>
        <h1>Welcome to Assosa city ecommerce</h1>
      </div>
      <div>
        <p>
        Experience the best of Assosa City at your 
        fingertips. Our online platform brings the city's 
        diverse marketplace to you, offering a convenient 
        and secure way to shop, discover 
        new businesses, and support our local economy.
        </p>
      </div>
      <div>
        <Link>
        Start Shopping
        </Link>
      </div>
    </div>
  )
}

export default Header