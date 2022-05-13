import React from "react";

export const Jumbotron = () => {
  return (
    <div className="container">
    <div className="row pt-4">
      <div className="col-md-4 d-flex align-items-center">
        <div>
          <h2 className="  heading ">
            Encuentras tus Practicas Profesionales.
          </h2>
          <p>
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card border-0 ">
          <img
            src="https://expresolatino.net/wp-content/uploads/2013/09/estudiantelatinoitalia.png "
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
    </div>
  );
};
