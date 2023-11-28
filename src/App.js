import logo from "./logo.svg";
import "./App.css";
import ProductSelection from "./components/ProductSwitcher";
import Darkmode from "./components/darkmodeswitcher"; 

function App() {
  return (
    <div className="App dark:bg-gray-800 min-h-screen flex flex-col items-center transition duration-200">
      <Darkmode/>
      <ProductSelection />
    </div>
  );
}

export default App;
