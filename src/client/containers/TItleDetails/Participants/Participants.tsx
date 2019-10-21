import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

interface Props {
  cast: any;
}

const Participants = (props: Props) => {
  const classes = useStyles();

  props.cast.sort((a, b) => {
    return a.RoleType < b.RoleType;
  });

  const rows = props.cast.map(p => {
    return (
      <tr key={p.ParticipantId}>
        <td>{p.Name}</td>
        <td>{p.RoleType}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Participants;
