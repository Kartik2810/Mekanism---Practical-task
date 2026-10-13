import "./App.css";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-20">
        <Header />
        <Dropdown/>
      </div>
    </>
  );
}

export default App;
