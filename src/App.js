import { useEffect } from "react";
import UserCard from "./components/UserCard/UserCard";
import GetAllUsers from "./services/userService";

function App() {
  useEffect(() => {
    GetAllUsers();
  }, []);

  return (
    <>
      <UserCard />
    </>
  );
}
export default App;
