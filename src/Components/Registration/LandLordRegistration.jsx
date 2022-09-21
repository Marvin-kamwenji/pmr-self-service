
import React from "react";
import NextOfKin from "../Landlord/NextOfKin";
import Attachment from '../Landlord/Attachment';
import LandlordInformation from "../Landlord/LandlordInformation";
import PropertyPaymentInformation from "../Landlord/PropertyPaymentInformation";
import PropertyFinancialInformation from "../Landlord/PropertyFinancialInformation";
import PropertyInformation from "../Landlord/PropertyInformation";
import LandlordStepper from "../Landlord/LandlordStepper";
import {EntityTrackerTableDynamic, EntityTrackerTableNextOfKin} from "../Landlord/EntityTrackerTable";
import Playground from "../Landlord/Playground";




function LandlordRegistration() {
  return (
    <div>
      <LandlordStepper/>
    </div>
  );
}

export default LandlordRegistration;
