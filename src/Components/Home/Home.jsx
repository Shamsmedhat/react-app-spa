import mainImg from "../../assets/avataaars.svg";

function Home() {
  return (
    <>
      <div id="home" className="container-fluid">
        <img src={mainImg} alt="mainAvatar"></img>
        <h1>START FRAMEWORK</h1>
        <div id="starIcon" className="position-relative">
          <i className="fa-solid fa-star"></i>
        </div>
        <span>Graphic Artist - Web Designer - Illustrator</span>
      </div>
    </>
  );
}

export default Home;
