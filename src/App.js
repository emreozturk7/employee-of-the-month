import { useEffect } from "react";
import getAllUsers from "./services/userService";
import "./App.css";
import Routers from "./router/Routers";

function App() {
  useEffect(() => {
    getAllUsers();
  }, [])


  return (
    <div className="App">
      <Routers />
    </div >
  );
}
export default App;
