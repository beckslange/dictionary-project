import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary />
          <form>
            <input type="search" />
            <input type="submit" className="btn btn-primary" />
          </form>
        </header>
      </div>
    </div>
  );
}
