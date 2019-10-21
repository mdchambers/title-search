import React from "react";
import { createUseStyles, useTheme } from "react-jss";

interface Props {
  id: number;
  userid: number;
  text: string;
  location: string;
  _created: Date;
  name: string;
  avatar: string;
}

const useStyles = createUseStyles({
  card: {
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    boxShadow: "10px 5px 5px grey"
  },
  avatar: {
    borderRadius: "50%",
    height: 75,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 10
  }
});

const ChirpCard = (props: Props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const cardClasses = `media ${classes.card}`;
  const avatarClasses = `mr-3 ${classes.avatar}`;
  return (
    <div className={cardClasses}>
      <img src={props.avatar} className={avatarClasses} alt="avatar" />
      <div className="media-body">
        <h5 className="mt-0">{props.name}</h5>
        <p>{props.text}</p>
        <p>Posted: {props._created.toDateString()}</p>
      </div>
    </div>
  );
};

export default ChirpCard;

/* <p>{props.id}</p>
<p>{props.text}</p>
<p>{props._created}</p>
<p>{props.name}</p>
<p>{props.avatar}</p> */
