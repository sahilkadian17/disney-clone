import React from "react";

function Viewers() {
  return (
    <div className="Viewers__Container">
      <div className="Viewers__Wrap">
        <img src="/images/viewers-disney.png" alt="" className="Viewers__Img" />
        <video autoPlay loop playsInline muted className="Viewers__Video">
          <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="Viewers__Wrap">
        <img src="/images/viewers-pixar.png" alt="" className="Viewers__Img" />
        <video autoPlay loop playsInline muted className="Viewers__Video">
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="Viewers__Wrap">
        <img src="/images/viewers-marvel.png" alt="" className="Viewers__Img" />
        <video autoPlay loop playsInline muted className="Viewers__Video">
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="Viewers__Wrap">
        <img src="/images/viewers-starwars.png" alt="" className="Viewers__Img" />
        <video autoPlay loop playsInline muted className="Viewers__Video">
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="Viewers__Wrap">
        <img src="/images/viewers-national.png" alt="" className="Viewers__Img" />
        <video autoPlay loop playsInline muted className="Viewers__Video">
          <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default Viewers;
