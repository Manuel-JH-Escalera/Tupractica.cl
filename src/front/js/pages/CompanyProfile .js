import React from "react";
import CompanyData from "../component/CompanyData";
import ProfilePhoto from "../component/ProfilePhoto";
import AddressData from "../component/AddressData";
import ContacInformation from "../component/ ContactInformation";
export const CompanyProfile = () => {
  return (
    <>
      <div className="container ">
        <ProfilePhoto />
        <CompanyData />
        <AddressData />
        <ContacInformation />
      </div>
    </>
  );
};
