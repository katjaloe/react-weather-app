
import './App.css';
import axios from "axios";
import Weather from "./Weather"


function App() {
  return (
    <div className="App">
      
 <div class="container">
        <p>
       <Weather defaultCity="Berlin"/>
        </p>
      
        </div>
          <p class="github-link"> <a href = "https://github.com/katjaloe/react-weather-app" target="_blank" >Open-source code</a>, by Katja Löffler</p>
      
      
    </div>
  );
}

export default App;
