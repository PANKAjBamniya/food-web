import React from 'react';
import img1 from './images/logo.png';
import img2 from './images/cart.png';
// import img3 from './images/back.png';  
import img4 from './images/grocery-image.png';


function App() {
  return (
   <>
    <div
  className="px-10 py-5 bg-image bg-cover bg-center min-h-screen
   relative bg-gradient-to-r from-cyan-500 to-blue-500">
  <nav className="flex items-center justify-between">
    <img src={img1} className="w-40 cursor-pointer" />
    <ul className="flex">
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          Home
        </a>
      </li>
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          About
        </a>
      </li>
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          Features
        </a>
      </li>
      <li className="list-none inline-block px-5">
        <a href="#" className="no-underline text-white px-2">
          Contact
        </a>
      </li>
    </ul>
    <img src={img2} />
  </nav>
  <div className="text-white mt-36 max-w-xl">
    <h1 className="text-6xl font-semibold leading-normal">
      {" "}
      Groceries <br /> delivery in
      <span className="font-light"> 15 mins </span>{" "}
    </h1>
    <p>
      Grocity offer a wide range of pruduct, includeing fresh produts, meats,
      dairy, baked goods and non-perishable items.
    </p>
    <div>
      <a
        href="#"
        className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium 
          inline-block mt-6 hover:bg-transparent hover:border-yellow-300 
          hover:text-white duration-300 hover:border border border-transparent">
        Order Now
      </a>
      <a
        href="#"
        className=" rounded-3xl py-3 px-8 font-medium 
          inline-block ml-6 hover:bg-transparent hover:border-yellow-300 
          hover:text-white duration-300 hover:border border border-transparent">
        Download App
        <span className="text-lg inline-block rotate-90 ">→</span>
      </a>
    </div>
  </div>
  <img
    src={img4}
    className="w-full xl:w-1/2 xl:absolute bottom-0
  right-20"/>
</div>

   </>
  )
}

export default App;