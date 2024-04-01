import React from "react";
import OverviewImageCard, { ImgOverViewLabel } from "./OverviewImageCard";

const StandOutFeature = ({
  setFeat,
  standOutFeat,
  allImages,
  setAllImages,
}) => {
  return (
    <div>
      <OverviewImageCard
        standOutFeatures={true}
        standOutFeat={standOutFeat}
        setFeat={setFeat}
        allImages={allImages}
        setAllImages={setAllImages}
      />
    </div>
  );
};

export default StandOutFeature;
