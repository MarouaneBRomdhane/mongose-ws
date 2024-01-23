import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Nav from "./components/Nav";
import Register from "./components/Register";
import { UserList } from "./components/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
