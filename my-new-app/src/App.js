import AboutMe from "./components/AboutMe";
import HomeView from "./components/HomeView";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <HomeView />
      <div className = "aboutMeDiv">
        <div class = "col-4"></div>
      <AboutMe />
      <div class = "col-4"></div>

      </div>
    </div>
  );
}


export default App;