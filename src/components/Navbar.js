import * as React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  List,
  ListItem,
  Button,
  Box,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "white",
    color: "black",
    height: 100,
  },
  box: {
    height: "100%",
  },
  toolbar: {
    height: "100%",
  },
  dot: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textTransform: "uppercase",
    flexGrow: "2",
  },
  //list
  list: {
    display: "flex",
    flexGrow: "2",
  },
  ul: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    fontSize: "16px",
    color: "#222",
    fontWeight: "900",
    textDecoration: "none",
    textTransform: "uppercase",
    width: "100%",
    textAlign: "center",
  },
  active: {
    color: "orange",
  },
  profile: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: 150,
    textDecoration: "none",
    color: "#222",
  },
  profileImg: {
    marginRight: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathName = location.pathname;
  const { user, person, signUserOut } = useGlobalContext();
  return (
    <AppBar position="static" className={classes.navbar}>
      <Container className={classes.box}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" component="h1" className={classes.title}>
            Latos Blog <span className={classes.dot}>.</span>
          </Typography>
          <List className={classes.list}>
            <ListItem className={classes.ul}>
              <Link
                to="/"
                className={
                  pathName === "/"
                    ? `${classes.link} ${classes.active}`
                    : `${classes.link}`
                }
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to="/about"
                className={
                  pathName === "/about"
                    ? `${classes.link} ${classes.active}`
                    : `${classes.link}`
                }
              >
                About Us
              </Link>
            </ListItem>
            {user && (
              <ListItem>
                <Link
                  to="/createpost"
                  className={
                    pathName === "/createpost"
                      ? `${classes.link} ${classes.active}`
                      : `${classes.link}`
                  }
                >
                  Create post
                </Link>
              </ListItem>
            )}
            <ListItem>
              <Link
                to="/posts"
                className={
                  pathName === "/posts"
                    ? `${classes.link} ${classes.active}`
                    : `${classes.link}`
                }
              >
                Posts
              </Link>
            </ListItem>
            <ListItem>
              {!user ? (
                <Link
                  to="/login"
                  className={
                    pathName === "/login"
                      ? `${classes.link} ${classes.active}`
                      : `${classes.link}`
                  }
                >
                  Login
                </Link>
              ) : (
                <Box className={classes.profile}>
                  <img
                    src={person.image}
                    alt={person.name}
                    className={classes.avatar}
                  />
                  <Button className={classes.link} onClick={signUserOut}>
                    Log Out
                  </Button>
                </Box>
              )}
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
