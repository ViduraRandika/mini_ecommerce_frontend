import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import AuthService from "../services/AuthService";

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const fetchData = async () => {
    try {
      const res = await AuthService.isLoggedIn();
      if (res) {
        setIsLoading(false);
        setName(res.name);
        setIsLogged(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Menu secondary style={{ margin: "10px 0 0 0" }}>
      <Menu.Menu position="left" style={{ margin: "0 0 0 10px" }}>
        <Menu.Item>
          <Link style={{ cursor: "pointer", color: "black" }} to={"/"}>
            <h3>Products</h3>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            style={{ cursor: "pointer", color: "black" }}
            to={"/favourite-products"}
          >
            <h3>Favourites</h3>
          </Link>
        </Menu.Item>
      </Menu.Menu>
      {isLoading ? (
        <Menu.Menu position="right" style={{ margin: "0 10px 0 0" }}>
          loading
        </Menu.Menu>
      ) : isLogged ? (
        <Menu.Menu position="right" style={{ margin: "0 10px 0 0" }}>
          <Menu.Item>
            <Link style={{ cursor: "pointer", color: "black" }} to={"/"}>
              <h3>Hi, {name}</h3>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      ) : (
        <Menu.Menu position="right" style={{ margin: "0 10px 0 0" }}>
          <Menu.Item>
            <Link style={{ cursor: "pointer", color: "black" }} to={"/login"}>
              <Button primary>Login</Button>
            </Link>
            <Link
              style={{ cursor: "pointer", color: "black" }}
              to={"/register"}
            >
              <Button secondary>Register</Button>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  );
};

export default NavBar;
