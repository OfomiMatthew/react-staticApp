//import img1 from '../public/pizzas/salamino.jpg'

const Pizza = ({pizzaObj}) => {

const color1={
  color:'grey'
}

const color2={
  color:'black'
}

const filter1={
filter: 'grayscale(100%)'
}

const filter2={
  filter: 'grayscale(0%)'
  }

  return (
    <div style={pizzaObj.soldOut ? color1 : color2}>
    <li className="pizza">
    <img style={pizzaObj.soldOut ? filter1 : filter2} src={pizzaObj.photoName} alt={pizzaObj.name} />

    <div>
    <h3>{pizzaObj.name}</h3>
    
    <p>{pizzaObj.ingredients}</p>
    <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    
    </div>
    </li>
    </div>
  )


}

export default Pizza