import React from "react";

function ProfilePhoto() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col text-center">
          <img
            id="fotoperfil"
            src="https://picsum.photos/seed/100/300/300/"
            className="rounded-circle "
            alt="imagne"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
