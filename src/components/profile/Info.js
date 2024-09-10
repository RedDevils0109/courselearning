import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const Info = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ width: "80%" }}>Public Info</h1>
      <hr />
      <div style={{ width: "80%" }}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="John Ethan"
          sx={{
            width: "80%",
            mb: 4,
            "& label": { fontSize: "1.5rem" }, // Adjust the label font size
            "& input": { fontSize: "2rem" }, // Adjust the input font size
          }}
        />

        <TextField
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue="asdf.@gmail.com"
          sx={{
            width: "80%",
            mb: 4,
            "& label": { fontSize: "1.5rem" }, // Adjust the label font size
            "& input": { fontSize: "2rem" }, // Adjust the input font size
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          defaultValue="0924234233"
          sx={{
            width: "80%",
            mb: 4,
            "& label": { fontSize: "1.5rem" }, // Adjust the label font size
            "& input": { fontSize: "2rem" }, // Adjust the input font size
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Country"
          defaultValue="Vietnam"
          sx={{
            width: "55%",
            mb: 4,
            mr: 2,
            "& label": { fontSize: "1.5rem" }, // Adjust the label font size
            "& input": { fontSize: "2rem" }, // Adjust the input font size
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Postcode"
          defaultValue="12345"
          sx={{
            width: "23.6%",
            mb: 4,

            "& label": { fontSize: "1.5rem" }, // Adjust the label font size
            "& input": { fontSize: "2rem" }, // Adjust the input font size
          }}
        />
      </div>
      <div style={{ width: "80%" , textAlign: "right", marginRight: "550px"}}>
        <Button
          variant="contained"
          sx={{
            fontSize: "2rem", // Adjust font size
            padding: "12px 24px", // Adjust padding
            borderRadius: "8px", // Adjust border radius (optional)
          }}
        >
          Finish
        </Button>
      </div>
    </Box>
  );
};

export default Info;
