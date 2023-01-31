import "./App.css";
import Navbar from "./components/common/navbar";
import Featured from "./components/featuredSection/Featured";
import Series from "./components/series/Series";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Featured />} />
        <Route path="/series/*" element={<Series />} />
      </Routes>
    </>
  );
}

export default App;
