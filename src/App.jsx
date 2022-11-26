import Navbar from "./Components/NavBar/Navbar";
import { Route, Routes } from "react-router";
import Landing from "./Components/pages/Landing/Landing";
import SignIn from './Components/pages/signIn/SignIn'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signIn" element={<SignIn/> } />
      </Routes>
    </div>
  );
}

export default App;
