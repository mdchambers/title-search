import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Spinner from "../../components/Spinner/Spinner";
import { any } from "prop-types";

const useStyles = createUseStyles({
  container: {
    gridColumn: "1 / 3"
    // background: "green"
  },
  titleItem: {
    textDecoration: "none",
    margin: "0 16px",
    "&:hover": {
      backgroundColor: "#083d77",
      color: "white",
      textDecoration: "none"
    }
  }
});

interface Props {
  results: any;
  showDetails: any;
  activeId: number;
}

const SearchResults = (props: Props) => {
  const classes = useStyles();

  let resElements = null;
  if (props.results) {
    resElements = (
      <ul className={"list-group"}>
        {props.results.map((r: any) => {
          let elementClasses = `list-group-item ${classes.titleItem}`;
          if (r.TitleId === props.activeId) {
            elementClasses += " active";
          }
          return (
            <a
              href="#"
              className={elementClasses}
              key={r._id}
              onClick={() => props.showDetails(r.TitleId)}
            >
              {r.TitleName}
            </a>
          );
        })}
      </ul>
    );
  }

  return <div className={classes.container}>{resElements}</div>;
};

export default SearchResults;
