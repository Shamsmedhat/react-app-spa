function Contact() {
  return (
    <>
      <div className="container" id="contact">
        <h2>CONATCT SECTION</h2>
        <div className="starIcon">
          <i className="fa-solid fa-star"></i>
        </div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="userName"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="userAge"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="userEmail"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="userPassword"
            />
          </div>
          <button type="submit" className="btn sendBtn">
            send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
