import React, { useState, ChangeEvent } from "react";

import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  navBar: {
    backgroundColor: ({ theme }: { theme: any }) => theme.colorPrimary
  },
  navSearch: {
    width: "50%",
    marginRight: 10
  },
  navButton: {
    height: "100%",
    fontWeight: "bold"
  }
});

const Header = (props: any) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  const [input, setInput] = useState("");

  const changeHandler = (event: any) => {
    // console.log(event.currentTarget.value);
    setInput(event.currentTarget.value);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${classes.navBar}`}>
      <input
        className={`form-control-lg ${classes.navSearch}`}
        type="text"
        placeholder="Enter a title..."
        onChange={e => changeHandler(e)}
      />
      <button
        onClick={() => props.searchClick(input)}
        type="submit"
        className={`btn btn-primary ${classes.navButton}`}
      >
        SEARCH
      </button>
    </nav>
  );
};

export default Header;
