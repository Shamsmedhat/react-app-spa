const PortfolioItem = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-12">
        <div className="portfolio-item" onClick={props.onClick}>
          <img src={props.img} alt="" className="w-100 rounded-3" />
          <div className="portCover">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
