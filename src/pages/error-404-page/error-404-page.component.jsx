import { Link } from 'react-router-dom';

const Error404Page = () => {
  return (
    <div className="shop-wrapper has-error">
      <div className="error-wrapper">
        <div className="error-code">404</div>
        <img
          src="https://nephos.cssninja.io//assets/img/illustrations/error1.svg"
          alt=""
        />
        <h2>Page not found.</h2>
        <p>
          Sorry, we couldn't find that page. Continue browsing or go back to
          homepage.
        </p>
        <Link
          to="/"
          className="button is-solid primary-button raised is-rounded"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};
export default Error404Page;
