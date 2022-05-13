import React from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import ProfilePhoto from "../component/ProfilePhoto";
import ProfileDataPerson from "../component/ProfileDataPerson";
import AddressData from "../component/AddressData";
import ContacInformation from "../component/ ContactInformation";
import Anexos from "../component/anexos";
export const UserProfile = () => {
  return (
    <>
      <Navbar />

      <div className="container ">
        <ProfilePhoto />
        <ProfileDataPerson />
        <AddressData />
        <ContacInformation />
        <Anexos />
      </div>
      <Footer />
    </>
  );
};
