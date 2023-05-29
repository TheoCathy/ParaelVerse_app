import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function PaginationOutlined({ totalPages, activePage, onPageChange }) {
  const handlePageChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={activePage}
        variant="outlined"
        color="primary"
        onChange={handlePageChange}
        style={{ margin: "30px", placeContent: "center" }}
      />
    </Stack>
  );
}

