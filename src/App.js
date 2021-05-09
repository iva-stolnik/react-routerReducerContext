import ReducerPametni from "./components/ReducerPametni";
import ReducerGlupi from "./components/ReducerGlupi";
import KontekstGlupi from "./components/KontekstGlupi";
import VjezbaSwitch from "./components/VjezbaSwitch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <KontekstGlupi />
      <hr />
      <ReducerPametni />
      <hr />
      <ReducerGlupi />
      <hr />
      <VjezbaSwitch />
    </div>
  );
}

export default App;
