import React from 'react';
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";
import seven from "../assets/images/Logo (2).png";
import "../App.css";
import ".././assets/styles/style.css";

function Logos() {
  return (
    <div className="relative h-48 w-full mt-20 overflow-hidden">
    <div className="flex absolute animate-scroll space-x-4">
      <img
        src={one}
        alt="Image 1"
        className="h-32 w-56 object-cover"
      />
      <img
        src={two}
        alt="Image 2"
        className="h-60  w-56 object-cover two-logo"
      />
      <img
        src={three}
        alt="Image 3"
        className="h-60 two-logo w-56 object-cover"
      />
      <img
        src={four}
        alt="Image 4"
        className="h-60 two-logo w-56 object-cover"
      />
      <img
        src={five}
        alt="Image 5"
        className="h-32 w-56 object-cover"
      />
      <img
        src={six}
        alt="Image 6"
        className="h-32 w-56 object-cover"
      />
      <img
        src={seven}
        alt="Image 7"
        className="h-32 w-56 object-cover"
      />
     
     <img
        src={one}
        alt="Image 1"
        className="h-32 w-56 object-cover"
      />
      <img
        src={two}
        alt="Image 2"
        className="h-60 two-logo w-56object-cover"
      />
      <img
        src={three}
        alt="Image 3"
        className="h-60 two-logo w-56object-cover"
      />
      <img
        src={four}
        alt="Image 4"
        className="h-60 two-logo w-56object-cover"
      />
      <img
        src={five}
        alt="Image 5"
        className="h-32 w-56object-cover"
      />
      <img
        src={six}
        alt="Image 6"
        className="h-32 w-56object-cover"
      />
      <img
        src={seven}
        alt="Image 7"
        className="h-32 w-56object-cover"
      />
     
    </div>
  </div>
  );
}

export default Logos;
