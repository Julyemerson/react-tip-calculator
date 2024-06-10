import "./App.css";
import BillInput from "./components/BillInput";
import FriendServiceInput from "./components/FriendServiceInput";
import ServiceInput from "./components/ServiceInput";

function App() {
  return (
    <>
      <h1>
        Tip <em>React</em> Calculator
      </h1>
      <BillInput />
      <ServiceInput />
      <FriendServiceInput />
      <div className="pay-box">
        <p>Food: $100, Tips: $15</p>
        <h3>
          <em>Total:</em> $115
        </h3>
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
