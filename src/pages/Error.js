import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="error">
      <h1>Nothing to see here!</h1>
      <Link to="/" className="backHome">
        Back Home
      </Link>
    </section>
  );
}

export default Error;
