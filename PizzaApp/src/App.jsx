import { pizzaData } from "../public/data"
import Header from "./Header";
//import logo from  '../public/pizzas/spinaci.jpg'
import Footer from "./Footer";
import Menu from "./Menu";
import Pizza from "./Pizza";


const App = () => {
const pizzas = pizzaData;

  return (
    <div className="container">
      <Header></Header>
     
      <Menu></Menu>
      <ul className="pizzas">
      {pizzas.map((pizza)=>{

        
        return(
          
       <Pizza pizzaObj={pizza} key={pizza.price} />
          
          )
      })}
      
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default App;
