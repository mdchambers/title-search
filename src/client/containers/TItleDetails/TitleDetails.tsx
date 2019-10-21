import React from "react";
import { createUseStyles } from "react-jss";
import Participants from "./Participants/Participants";

const useStyles = createUseStyles({
  detailsPane: {
    gridColumn: "3 / 7",
    marginRight: 16
  }
});

interface Props {
  info: any;
}

const TitleDetails = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={`card ${classes.detailsPane}`}>
      <div className="card-body">
        <h5 className="card-title">{props.info.TitleName}</h5>
        <h6 className="card-subtitle text-muted">{props.info.ReleaseYear}</h6>
        <p className="card-text">{props.info.Storylines[0].Description}</p>
        <Participants cast={props.info.Participants} />
      </div>
    </div>
  );
};

export default TitleDetails;
