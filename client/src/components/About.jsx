import React from "react";
import himg from "../images/about1.png";

const About = () => {
  return (
    <>
      <section className="my-5">
        <div className="text-center">
          <h1 className="display-6">About Us</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-center ">
              <figure>
                <img src={himg} alt="img" className="img-fluid about_img" />
              </figure>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <h1>Our Journey</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quaerat, iste ullam error fugiat repellat quidem
                quisquam ad provident fugit veritatis architecto accusantium
                quibusdam est assumenda ipsum neque veniam reprehenderit! Enim
                blanditiis rerum nemo fugiat magni saepe repellendus molestias
                commodi. Aspernatur omnis consequuntur perferendis eos, fuga
                suscipit voluptatem repellendus maxime!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
