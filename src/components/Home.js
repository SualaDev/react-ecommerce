import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [selectedOption, setSelectedOption] = useState('')
  const [quantity, setQuantity] = useState('')
  const optionsData = [
    {id: 'option1', label:'Cream', price: 300, quantity: 3},
    {id: 'option2', label:'Soap', price: 700, quantity: 7},
    {id: 'option3', label:'Spray', price: 100, quantity: 10}
  ]
  const selectedProduct = optionsData.find((option) => option.id === selectedOption)
  const handlePrice = () => {
    if(selectedProduct) {
      const totalPrice = selectedProduct.price * selectedProduct.quantity;
      return isNaN(totalPrice) ? 'Invalid Quantity' : `Price: $${totalPrice}`
    }
    return ''
  }
  return (
    <div>
        <div>
          <Link to="/home">Home Page</Link>
          <Link to="/cart">Your Cart</Link>
          <Link to="/">Login</Link>
        </div>
        <div>
            <h1>Welcome</h1>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
              {optionsData.map((option) => (
                <option key={option.id} value={option.id}>{option.label}</option>
              ))}
            </select>
            <label htmlFor="quantity">Quantity *</label>
            <input type="number" value={quantity} id='quantity' onChange={(e)=> setQuantity(e.target.value)} />
            {quantity > 0 || <p>Please enter an amount</p>}
            {quantity <= selectedProduct?.quantity || <p>Not enough in stock</p>}
            <h3>Price:{handlePrice()}</h3>
        </div>      
    </div>
  )
}

export default Home