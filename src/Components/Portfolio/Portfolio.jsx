import { useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import PortfolioSoloItem from "../PortfolioSoloItem/PortfolioSoloItem";

function Portfolio() {
  const [img, setImg] = useState(null);
  const [open, setOpen] = useState(false);

  function handleDisplay(img) {
    setImg(img);
    setOpen(true);
  }

  return (
    <>
      <div className="container text-center" id="portfolio">
        <h2>PORTFOLIO COMPONENT</h2>
        <div className="starIcon">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="row mb-5 g-5">
          <PortfolioItem img={img1} onClick={() => handleDisplay(img1)} />
          <PortfolioItem img={img2} onClick={() => handleDisplay(img2)} />
          <PortfolioItem img={img3} onClick={() => handleDisplay(img3)} />
        </div>
        <div className="row mb-5 g-5">
          <PortfolioItem img={img1} onClick={() => handleDisplay(img1)} />
          <PortfolioItem img={img2} onClick={() => handleDisplay(img2)} />
          <PortfolioItem img={img3} onClick={() => handleDisplay(img3)} />
        </div>
        {open && (
          <PortfolioSoloItem
            src={img}
            close={open}
            onClick={() => handleDisplay()}
          />
        )}
      </div>
    </>
  );
}

export default Portfolio;
