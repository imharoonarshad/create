import "./App.css";
import { Route, Routes } from "react-router-dom";
import DiscreteSlider from "./components/view/slider";
import LightBulb from "./components/view/bulb";
import Navbar from "./components/view/navbar";
import Form from "./components/view/form";
import Logs from "./components/view/logs";

function App() {


  return (

    <Routes>
      <Route path="/" element={<>

        <Navbar />
        <DiscreteSlider />
        <LightBulb />
        {/* <BasicTable /> */}

      </>} />


      <Route path="/form" element={<Form />} />
      <Route path="/logs" element={<Logs />} />



    </Routes>




  );
}

export default App;
