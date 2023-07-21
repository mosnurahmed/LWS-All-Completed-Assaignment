import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Matches from "./component/Matches";
import AddMatch from "./component/AddMatch";

function App() {
  return (
    <div className="body">
      <section className="section">
        <Header />
        <Matches />
        <AddMatch />
      </section>
      <section className="mask"></section>
    </div>
  );
}

export default App;
