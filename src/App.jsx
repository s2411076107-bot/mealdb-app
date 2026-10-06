import { Routes,Route } from "react-router-dom";

import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import MealsDetails from "./pages/MealsDetails";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Categories/>}/>
      <Route path="/category/:categoryName" element={<Meals/>}/> 
       <Route path="/meal/:id" element={<MealsDetails/>}/>
    </Routes>
  );
}
export default App;