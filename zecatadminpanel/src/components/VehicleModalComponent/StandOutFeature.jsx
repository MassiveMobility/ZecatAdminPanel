import React from "react";
import OverviewImageCard, { ImgOverViewLabel } from "./OverviewImageCard";

const StandOutFeature = () => {
  return (
    <div>
      <OverviewImageCard standOutFeatures={true}/>
    </div>
  );
};

export default StandOutFeature;
