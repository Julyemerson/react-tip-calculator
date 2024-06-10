export default function ServiceInput({ value, onSelect, label }) {
  return (
    <>
      <div className="tip-input">
        <label htmlFor="service"> {label} </label>
        <select
          value={value}
          onChange={(e) => onSelect(Number(e.target.value))}
          name="service"
          id="service"
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}> It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolute amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}
