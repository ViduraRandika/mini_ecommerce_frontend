import React from "react";
import { Button, Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <>
      <Menu secondary style={{ margin: "10px 0 0 0" }}>
        <Menu.Menu position="right" style={{ margin: "0 10px 0 0" }}>
          <Button primary>Button 1</Button>
          <Button secondary>Button 2</Button>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default NavBar;
