

const Footer = () => {
  const hour = new Date().getHours()
  return (
    <footer className="footer">
    
    <h1>We are currently open at {new Date().toLocaleTimeString()}</h1>
    </footer>
  )
}

export default Footer