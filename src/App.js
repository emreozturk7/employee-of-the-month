import Home from "./pages/Home";
import GetAllUsers from "./services/userService";

function App() {
  return (
    <>
      <GetAllUsers />
      <Home />
    </>
  );
}
export default App;
