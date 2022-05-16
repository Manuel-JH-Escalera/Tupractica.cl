import React from "react";
import CompanyData from "../component/CompanyData";
import ProfilePhoto from "../component/ProfilePhoto";
import AddressData from "../component/AddressData";
import ContacInformation from "../component/ContactInformation";
import Bio from "../component/Bio";

export const CompanyProfile = () => {
  return (

      <div className="container ">
        <ProfilePhoto />
        <Bio />
        <CompanyData />
        <AddressData />
        <ContacInformation />
      </div>
  );
};
