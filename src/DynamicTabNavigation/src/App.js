
import Leftmenu from "./Components/LeftStackedBar/Leftmenu";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
   
      <BrowserRouter>
        <Leftmenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
