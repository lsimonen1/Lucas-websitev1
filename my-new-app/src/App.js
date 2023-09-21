import AboutMe from "./components/AboutMe";
import Name from "./components/Name";
import TabButton from "./components/TabButton";


function App() {
  return (
    <div className="App">
      <div className="namePage">
      <div className="topHalf">
      <TabButton title = 'Portfolio' />
      <TabButton title = 'About Me' />
      <TabButton title = 'Download Resume' />
      </div>
      <header className="App-header">
        <Name />
      </header>
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
