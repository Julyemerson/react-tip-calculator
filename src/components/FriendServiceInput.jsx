export default function FriendServiceInput() {
  return (
    <>
      <div className="tip-input">
        <label htmlFor="service"> How did your friend like the service? </label>
        <select name="service" id="service">
          <option value="dissatisfied">Dissatisfied (0%)</option>
          <option value="okay"> It was okay (5%)</option>
          <option value="good">It was good (10%)</option>
          <option value="amazing">Absolute amazing! (10%)</option>
        </select>
      </div>
    </>
  );
}
