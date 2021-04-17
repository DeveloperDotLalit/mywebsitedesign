import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "@material-ui/icons/Home";
import Insta from "@material-ui/icons/Instagram";
import YT from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";

const titleName= 250;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    width: "100%",
    top: 0,
  },

  logo: {
    color: "rgba(123,124,175,1)",
    marginRight: theme.spacing(2),
  },
  toolBar: {
    paddingTop: `calc(${titleName}px + ${theme.spacing(2)})`,
    minHeight: 20,
    padding: theme.spacing(1),
  },
  socialButton: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginRight: theme.spacing(1),
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginRight: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const TechNewsAppBar = ({ drawerOpen, setDrawerOpen }) => {
  const classes = useStyles();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Logo className={classes.logo} />
          <Typography className={classes.title} variant="h5" noWrap>
            Tech News Online
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="Instagram"
          >
            <Insta />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="You Tube"
          >
            <YT />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.socialButton}
            color="inherit"
            aria-label="Twitter"
          >
            <Twitter />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TechNewsAppBar;
