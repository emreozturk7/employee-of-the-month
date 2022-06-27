import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { theme, users } = useSelector(state => state.site);

  console.log(users);
  console.log(theme);

  return (
    <div>
    </div>
  );
}
export default App;
