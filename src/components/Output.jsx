export default function Output({ bill, tip }) {
  return (
    <div className="pay-box">
      <p>
        Food: ${bill ? bill : 0} | Tips: ${tip}
      </p>
      <h3>
        <em>Total:</em> ${bill + tip}
      </h3>
    </div>
  );
}
