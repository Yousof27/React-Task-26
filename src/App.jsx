import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, reset, login, logout } from "./redux/action/actions.js";

function App() {
  const counter = useSelector(state => state.Count.count);
  const auth = useSelector(state => state.Auth.isAuthenticated);
  const Dispatches = useDispatch();
  return (
    <>
      <h2 style={{ border: "1px solid #aaa", padding: "10px", color: "#aaa" }}>Redux</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => Dispatches(inc(1))}>+</button>
      <button onClick={() => Dispatches(reset())}>Reset</button>
      <button onClick={() => Dispatches(dec(1))}>-</button>
      <br />
      <br />
      <hr />
      <h2>Authentication: {auth ? "Yes" : "No"}</h2>
      <button onClick={() => Dispatches(logout())}>No</button>
      <button onClick={() => Dispatches(login())}>Yes</button>
    </>
  );
}

export default App;