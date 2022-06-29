import { useEffect } from "react";
import getAllUsers from "./services/userService";
import "./App.css";
import Routers from "./router/Routers";
import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    getAllUsers();
  }, [])


  return (
    <div className="App">
      <Header />
      <Routers />
    </div >
  );
}
export default App;
