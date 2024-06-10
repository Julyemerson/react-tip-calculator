export default function BillInput() {
  return (
    <>
      <div className="tip-input">
        <label htmlFor="bill">How much was the bill?</label>
        <input
          type="number"
          placeholder="Enter bill amount"
          id="bill"
          name="bill"
        />
      </div>
    </>
  );
}
