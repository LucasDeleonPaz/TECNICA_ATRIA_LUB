import { Routes } from "./routes";
import { api } from "./services/api";


function App() {

  api()

  return (
    <Routes/>
  );
}

export default App;
