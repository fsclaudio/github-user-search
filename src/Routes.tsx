import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";


function Routes(){
    return(
        <BrowserRouter >
           <Navbar />
           <Switch>
               <Route path="/searchs">
                  <Search /> 
               </Route>
   
               <Route path="/">
                   <Home />
               </Route>
            </Switch>     
        </BrowserRouter>
    )
   }
   
   export default Routes;