
import { Routes, Route } from "react-router-dom";
import TextTransform from "../textTransformConvert";

function Routing() {
  return (
    <div className="App">
        <Routes>
          <Route path="/text-convert" element={<TextTransform />}></Route> 
        </Routes>      
    </div>
  );
}

export default Routing;
