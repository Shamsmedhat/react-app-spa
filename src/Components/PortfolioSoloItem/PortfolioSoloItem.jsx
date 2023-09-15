import React from "react";

const PortfolioSoloItem = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      {props.src && (
        <>
          <div id="showItem" className="container-fluid">
            <div id="soloItem" onClick={handleClick}></div>
            <div id="PortItem">
              <img src={props.src} alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioSoloItem;
