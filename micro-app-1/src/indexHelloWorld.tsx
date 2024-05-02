import HelloWorld from "./component/HelloWorld";
import ReactDOM from "react-dom/client";

 const mount = (el : Element) : void =>  {
    ReactDOM.createRoot(el).render(<HelloWorld/>)
 }

 export default mount;