import Name from "./components/Name";
import TabButton from "./components/TabButton";


function App() {
  return (
    <div className="App">
      <div className="topHalf">
      <TabButton title = 'Portfolio' />
      <TabButton title = 'About Me' />
      <TabButton title = 'Download Resume' />
      </div>
      <header className="App-header">
        <p>
          Lucas Simonen
        </p>
      </header>
    </div>
  );
}

export default App;
