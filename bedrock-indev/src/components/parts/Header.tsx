import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="fixed w-full h-48 top-0 flex items-center justify-between p-5 bg-gray-700 text-white z-50">
        <h1 className="text-6xl font-semibold ml-20 flex items-center">
          <img src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/bedrock.png" alt="-" className="mr-3 w-24 h-24" />
          <Link to='/'>Bedrock</Link>
        </h1>
        <div className="flex justify-end space-x-20 mr-40">
          <h1 className="text-3xl font-semibold pl-2"><Link to='/about'>About</Link></h1>
          <h1 className="text-3xl font-semibold pl-2"><Link to='/products'>Products</Link></h1>
          <h1 className="text-3xl font-semibold pl-2"><Link to='/cases'>Cases</Link></h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
