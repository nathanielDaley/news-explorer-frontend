import Header from "../Header/Header";
import background from "../../assets/search-background.jpg";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <div className="app__container">
          <Header></Header>
          <img src={background} alt="test" className="test" />
        </div>
      </div>
    </div>
  );
}

export default App;
