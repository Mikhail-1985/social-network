import React from "react";
import styles from "./Paginator.module.css";

import PaginationItem from "@mui/material/PaginationItem";
import Pagination from "@mui/material/Pagination";
const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Pagination
        page={props.currentPage}
        color="secondary"
        count={pagesCount}
        // showFirstButton
        // showLastButton
        onChange={(e) => {
          // console.log(e.currentTarget.textContent)
          props.onPageChanged(Number(e.currentTarget.textContent))
        }}
        renderItem={(page) => (
          <PaginationItem {...page} />
        )}
      />
      {/* {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p ? styles.selectedPage : ""}
            onClick={() => props.onPageChanged(p)}
          >
            {p}
          </span>
        );
      })} */}
    </div>
  );
};

export default Paginator;
