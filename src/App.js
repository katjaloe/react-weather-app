import logo from './logo.svg';
import './App.css';
import axios from "axios";
import SearchEngine from "./SearchEngine"

function App() {
  return (
    <div className="App">
      
 <div class="container">
        <p>
       <SearchEngine />
        </p>
        </div>
          <p class="github-link"> <a href = "https://github.com/katjaloe/sheCodes_weatherApp_2020" target="_blank">Open-source code</a>, by Katja Löffler</p>
      
      
    </div>
  );
}

export default App;
