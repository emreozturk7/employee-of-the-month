import Home from "./pages/Home";
import { useEffect } from "react";
import getAllUsers from "./services/userService";
import "./App.css";

function App() {
  useEffect(() => {
    getAllUsers();
  }, [])


  return (
    <>
      <Home />
    </>
  );
}
export default App;
