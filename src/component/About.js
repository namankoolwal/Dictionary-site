import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              molestiae earum rem doloremque, nihil delectus ullam error
              consectetur? Dicta, non exercitationem in consectetur totam
              dolorum at voluptate laudantium aliquam, officiis perspiciatis
              molestias reiciendis consequuntur ullam perferendis velit
              blanditiis distinctio assumenda a maxime reprehenderit atque. Nam
              eius rerum distinctio, a illo earum, optio molestias nostrum
              maxime quibusdam delectus, adipisci impedit? Nam corporis
              reiciendis minus quod eaque, laborum veritatis voluptatibus id
              maiores tempore accusantium recusandae perspiciatis, officia cum
              ad maxime fuga repellendus a magni consequatur. Unde adipisci hic
              provident est sint corporis, dolorem esse autem soluta molestiae
              optio quisquam eligendi obcaecati minima? */}
              <br />
              HII.. THERE...
              <br />
              This Is A Demo Free Dictionary Site
              <br />
              Developed By Naman Khandelwal
              <br />
              Thank You For Visiting..
              <h5>Have A Great Day</h5>
            </p>
            <br />
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
            <hr />
            {/* <div className="navbar navbar-expand-lg navbar-light bg-white  ">
              <div className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <a href="https://instagram.com/naman_koolwal">
                  <i className="fa fa-instagram fa-lg me-5"></i>
                </a>
                <a href="https://www.facebook.com/naman.koolwal">
                  <i className="fa fa-facebook fa-lg me-5"></i>
                </a>
                <a href="https://twitter.com/NAMANKH31936926?t=NgPyoRrpwAqAYonRRIUXxA&s=08">
                  <i className="fa fa-twitter fa-lg me-5"></i>
                </a>
                <a href="https://github.com/namankoolwal">
                  <i className="fa fa-github fa-lg me-5"></i>
                </a>
                <a href="https://www.linkedin.com/in/naman-khandelwal-568971189/">
                  <i className="fa fa-linkedin fa-lg me-5"></i>
                </a>
                <a href="mailto:namankoolwal1411@gmail.com">
                  <i className="fa fa-envelope fa-lg me-3"></i>
                </a>
              </div>
            </div> */}
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
