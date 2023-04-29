import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationOutlined() {
  return (
    <Stack spacing={2}>
      {/* <Pagination count={10} variant="outlined" /> */}
      {/* <Pagination count={10} variant="outlined" color="primary" /> */}

      {/* <Pagination
        count={10}
        variant="outlined"
        color="secondary"
        style={{ margin: "30px", placeContent: "center" }}
      /> */}
      <Pagination
        count={5}
        variant="contained"
        disabled
        style={{
          marginTop: "80px",
          marginLeft: "550px",
          marginBottom: "50px",
          color: "primary",
        }}
      />
    </Stack>
  );
}
