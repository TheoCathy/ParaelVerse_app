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


// const navigate = useNavigate();

//   const handlePageClick = (page) => {
//     onPageChange(page);
//     navigate(`/page/${page}`);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <li
//           key={i}
//           className={`page-item ${i === activePage ? "active" : ""}`}
//           onClick={() => handlePageClick(i)}
//         >
//           <a className="page-link" href="#!">
//             {i}
//           </a>
//         </li>
//       );
//     }

//     return pageNumbers;
//   };

//   return (
//     <nav>
//       <ul className="pagination">
//         {renderPageNumbers()}
//       </ul>
//     </nav>
//   );
// };

