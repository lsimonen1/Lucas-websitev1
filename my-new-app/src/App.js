import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Name from "./components/Name";
import TabButton from "./components/TabButton";

let color1;
let color2;

function App() {
  return (
    <div className="App">
      <div className="namePage" style = {{backgroundImage: "linear-gradient(" + color1 + ", " + color2 +")"}}>
      <div className="topHalf">
</div>
      <header className="App-header">
        <Name />
        <div className="topHalf">
      <TabButton class="col-sm-4" title = 'Portfolio' />
      <TabButton title = 'About Me' />
      <TabButton title = 'Download Resume' />
      </div>
      </header>
      </div>
      <AboutMe />
    </div>
  );
}


useEffect(() => {

  const interval = setInterval(() => {
    color1=1;
  },2000)

  return () => clearInterval(interval);
}, []);



export default App;
