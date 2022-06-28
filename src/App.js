import { useEffect } from "react";
import Home from "./pages/Home";
import GetAllUsers from "./services/userService";

function App() {
  useEffect(() => {
    GetAllUsers();
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
export default App;
