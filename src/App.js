
import Control from "./Components/Control";
import HomePage from "./Components/Homepage";
import { useState } from "react";

import "./reset.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(){
    setIsLoggedIn(true)
  }
  function logout(){
    setIsLoggedIn(false)
  }

  return (
    <div className="App">
      {isLoggedIn?<Control logout={logout}/>:<HomePage login={login}/>}
       {/* feito dessa maneira para centralizar as funções  */}
    </div>
  );
}

export default App;
