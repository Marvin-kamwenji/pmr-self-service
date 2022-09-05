
import React from "react";
import NextOfKin from "../Landlord/NextOfKin";
import Attachment from '../Landlord/Attachment';
import LandlordInformation from "../Landlord/LandlordInformation";
import PropertyPaymentInformation from "../Landlord/PropertyPaymentInformation";
import PropertyFinancialInformation from "../Landlord/PropertyFinancialInformation";

function LandlordRegistration() {
  return (
    <div>
      <h1>Hello Landlord</h1>
      <PropertyFinancialInformation/>
      <PropertyPaymentInformation/>
      <LandlordInformation/>
      <NextOfKin/>
      <Attachment/>
    </div>
  );
}

export default LandlordRegistration;
