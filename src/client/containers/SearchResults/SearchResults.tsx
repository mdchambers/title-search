import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Spinner from "../../components/Spinner/Spinner";
import { any } from "prop-types";

const useStyles = createUseStyles({
  container: {
    gridColumn: "1 / 3"
    // background: "green"
  }
});

interface Props {
  results: any;
  showDetails: any;
}

const SearchResults = (props: Props) => {
  const classes = useStyles();

  let resElements = null;
  if (props.results) {
    resElements = (
      <ul className={"list-group"}>
        {props.results.map((r: any) => (
          <li
            className="list-group-item"
            key={r._id}
            onClick={() => props.showDetails(r.TitleId)}
          >
            {r.TitleName}
          </li>
        ))}
      </ul>
    );
  }

  return <div className={classes.container}>{resElements}</div>;
};

export default SearchResults;
