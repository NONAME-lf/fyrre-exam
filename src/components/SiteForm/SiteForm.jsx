export default function SiteForm() {
  return (
    <form method="post">
      <h2>Design News to your inbox</h2>
      <label htmlFor="userName">
        <input
          id="userName"
          name="userName"
          autoComplete="name"
          placeholder="Name"
          type="text"
          className="name-input"
        />
        <span className="placeholder">Name</span>
      </label>
      <label htmlFor="userEmail">
        <input
          id="userEmail"
          name="userEmail"
          autoComplete="email"
          placeholder="Email"
          type="text"
          className="email-input"
        />
        <span className="placeholder">Email</span>
      </label>
      <button id="submit-button" type="submit" className="btn glow-on-hover">
        {/* <!-- use span here instead of div, because div elements isn't allowed inside of button --> */}
        <span className="holographic-card">Submit</span>
      </button>
    </form>
  );
}
