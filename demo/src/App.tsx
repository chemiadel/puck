import "./App.css";
import { usePuck, Context } from "../../src";
import { useContext } from "react";
import MyModal from "./components/Modal";

function App() {
  const modal1 = usePuck(`modal1`);

  return (
    <div className="App">
      <h1>Vite + React + Puck</h1>
      <div className="card">
        <br />
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={() => modal1.open()}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open modal 1
          </button>
        </div>
        <br />
        <button onClick={() => modal1.close()}>close A</button>
      </div>
      <MyModal />
    </div>
  );
}

export default App;
