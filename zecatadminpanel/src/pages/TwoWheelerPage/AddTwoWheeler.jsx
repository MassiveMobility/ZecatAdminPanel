import { Box } from "@mui/material";
import React from "react";
import { Row, Col } from "react-bootstrap";

const AddTwoWheeler = () => {
  return (
    <Box>
      <Row>
        <Col md={9}>left</Col>
        <Col md={3}>right</Col>
      </Row>
    </Box>
  );
};

export default AddTwoWheeler;
