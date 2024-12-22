import React from "react";
import Logo from "../assets/Logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LogoComponent() {
  return (
    <div>
      <LazyLoadImage
        className="w-36 mx-10 md:mx-32 mt-6"
        loading="lazy"
        src={Logo}
        alt="Logo"
        effect="blur"
        wrapperProps={{ style: { transitionDelay: "0.1s" } }}
      />
    </div>
  );
}

export default LogoComponent;
