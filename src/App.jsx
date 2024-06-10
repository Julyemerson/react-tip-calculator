import { useState } from "react";
import "./App.css";
import BillInput from "./components/BillInput";
import ServiceInput from "./components/ServiceInput";
import Output from "./components/Output";

function App() {
  const [bill, setBill] = useState(0);
  const [rateService, setRateService] = useState(0);
  const [friendService, setFriendService] = useState(0);

  const tip = bill * ((rateService + friendService) / 2 / 100);

  function handleReset() {
    setBill(0);
    setRateService(0);
    setFriendService(0);
  }

  return (
    <>
      <h1>
        Tip <em>React</em> Calculator
      </h1>
      <BillInput value={bill} onSetBill={setBill} />
      <ServiceInput
        value={rateService}
        onSelect={setRateService}
        label="How did you like the service?"
      />
      <ServiceInput
        value={friendService}
        onSelect={setFriendService}
        label="How did your friend like the service?"
      />
      <Output bill={bill} tip={tip} />

      {bill > 0 && (
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </>
  );
}

export default App;
