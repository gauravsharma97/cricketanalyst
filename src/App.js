import "./App.css";
import Navbar from "./components/common/navbar";
import Featured from "./components/featuredSection/Featured";
import Series from "./components/series/Series";
import SeriesCard from "./components/series/SeriesCard";
function App() {
  return (
    <>
      <Navbar />
      {/* <Featured/> */}
      <Series/>
      {/* <SeriesCard/> */}
    </>
  );
}

export default App;
