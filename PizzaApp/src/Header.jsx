

const Header = () => {
  const title = "Fast React Pizza Co."
  const color ={
    color:"red"
  }
  return (
    <header className="header">
    <h1 style={color} >{title.toUpperCase()}</h1>
    </header>
  )
}

export default Header