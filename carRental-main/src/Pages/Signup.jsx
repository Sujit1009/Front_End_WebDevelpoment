import HeroPages from "../components/HeroPages";

function Signup() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="SignUp" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 1234567890
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@xyz.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Vijayawada,
                Andhra Pradesh
              </a>
            </div>
            <div className="contact-div__form">
              <form  action="/signin">
              <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" ></input>
                <label>
                  Mobile <b>*</b>
                </label>
                <input type="text" ></input>
                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>
                <label>
                 Password <b>*</b>
                </label>
                <input type="password" ></input>
                {/* <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea> */}

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 1234567890</h3>
              </span>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default Signup;
