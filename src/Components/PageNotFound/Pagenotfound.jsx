import errorImg from "../../assets/warning.png";

function Pagenotfound() {
  return (
    <>
      <div id="errorPage" className="container">
        <div className="errorImg">
          <img alt="" src={errorImg}></img>
        </div>
        <h2>
          Page Not Found <i class="fa-regular fa-face-frown-open mx-2"></i>
        </h2>
        <p className="fs-4">
          Pleas try from nav bar
          <i class="fa-regular fa-face-smile-wink mx-2"></i>
        </p>
      </div>
    </>
  );
}

export default Pagenotfound;
