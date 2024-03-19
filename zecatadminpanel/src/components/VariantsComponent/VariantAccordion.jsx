import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import KeySpecs from "../VehicleModalComponent/KeySpecs";

const VariantAccordion = () => {
  const accordionData = [
    {
      title: "Key specs",
    },
    {
      title: "Performance",
    },
    {
      title: "Motor",
    },
    {
      title: "Transmission",
    },
    {
      title: "Brakes",
    },
    {
      title: "Performance & fuel economy",
    },
    {
      title: "Tires & Wheels",
    },
    {
      title: "Dimensions",
    },
    {
      title: "Electricals",
    },
    {
      title: "App features",
    },
    {
      title: "What’s included",
    },
  ];
  return (
    <div>
      {accordionData.map((item) => {
        return (
          <Accordion
            sx={{
              marginBottom: "8px",
              borderRadius: "8px",
              fontFamily: "mySecondFont",
              fontSize: "16px",
              color: "#1b1b1b",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                background: "rgba(32, 121, 255, 0.07)",
                padding: "12px 16px",
                borderRadius: "8px",
              }}
            >
              {item.title}
            </AccordionSummary>

            <AccordionDetails sx={{ padding: "0px" }}>
              {item.title === "Key specs" ? <KeySpecs /> : ""}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default VariantAccordion;
