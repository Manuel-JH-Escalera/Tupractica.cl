import React from "react";

function ProfilePhoto() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-4"></div>
        <div className="col-4">
          <img
            src="https://picsum.photos/seed/100/300/300/"
            className="rounded-circle"
            alt="..."
          />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
