export default function BillInput({ value, onSetBill }) {
  return (
    <>
      <div className="tip-input">
        <label htmlFor="bill">How much was the bill?</label>
        <input
          type="number"
          step="any"
          placeholder="Bill value"
          id="bill"
          name="bill"
          value={value.toString()}
          onChange={(e) => onSetBill(Math.abs(Number(e.target.value)))}
        />
      </div>
    </>
  );
}
