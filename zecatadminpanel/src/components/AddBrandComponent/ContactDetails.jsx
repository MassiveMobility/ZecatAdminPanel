import { Box, Typography } from "@mui/material";
import React from "react";

const ContactDetails = ({ data, setData }) => {
  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setData({
      ...data,
      [fieldName]: value,
    });
  };
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Contact details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          flex: 1,
        }}
      >
        <Typography
          textAlign={"start"}
          fontSize={"14px"}
          fontFamily={"myThirdFont"}
          color={"#2f2f2f"}
        >
          Brand Website URL
        </Typography>

        <input
          style={{
            height: "56px",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid rgba(47, 47, 47, 0.25)",
            outline: "none",
            fontSize: "16px",
            fontFamily: "myFourthFont",
          }}
          type="text"
          placeholder="Enter the website URL here"
          value={data.website}
          onChange={(e) => handleInputChange(e, "website")}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Phone No.1
          </Typography>

          <input
            style={{
              height: "56px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="text"
            placeholder="Enter phone number one"
            value={data.phone_one}
            onChange={(e) => handleInputChange(e, "phone_one")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Phone No.2 (optinal)
          </Typography>
          <input
            style={{
              height: "56px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="text"
            placeholder="Enter phone number two"
            value={data.phone_two}
            onChange={(e) => handleInputChange(e, "phone_two")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Email 1
          </Typography>

          <input
            style={{
              height: "56px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="email"
            placeholder="Enter email one"
            value={data.email_one}
            onChange={(e) => handleInputChange(e, "email_one")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Email 2 (optional)
          </Typography>
          <input
            style={{
              height: "56px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="text"
            placeholder="Enter email two"
            value={data.email_two}
            onChange={(e) => handleInputChange(e, "email_two")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactDetails;
