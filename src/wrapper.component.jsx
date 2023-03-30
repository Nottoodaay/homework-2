import NavBar from "./navbar.component"
import Footer from "./footer.component"

const Wrapper = ({children}) =>{
  return(
    <div>
        <NavBar/>
        {children}
        <Footer/>
    </div>
  )  
}

export default Wrapper