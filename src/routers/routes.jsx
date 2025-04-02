import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Login,Home } from "../index.js";


export function MyRoutes() {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/asdsada" element={<Home />} />
          <Route path="/" element={<Login />} />
         
        </Routes>
          </BrowserRouter>
    );

}
