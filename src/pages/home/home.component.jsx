import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="background-caption">
        <h1>NEPHOS</h1>
      </div>

      <div className="hero-caption">
        <h1>NEPHOS HOME</h1>
        <h2>MODERN SHOP TEMPLATE</h2>
        <Link
          to="/category"
          className="button big-button primary-button upper-button rounded raised"
        >
          Start shopping
        </Link>
      </div>
    </>
  );
};

export default Home;
