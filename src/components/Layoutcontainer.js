import { React, useState } from "react";
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drawer from "@material-ui/core/Drawer";
import AppBar from './AppBar'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  titleHere: {
    textAling: 'center',
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  navBarHere: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  contentContainer: {
    height: '100%',
    width: '100%',
  },
  newsContent: {
    direction: 'column',
    height: '100%',
    width: '100%',
    justify: 'center',
  },
  newsRowOne: {
    direction: 'row',
    height: '49%',
    width: '100%',
  },
  newsRowTwo: {
    direction: 'row',
    height: '49%',
    width: '100%',
  },
  referenceContent: {
    direction: 'column',
    height: '100%',
    width: '100%',
    justify: 'center',
    alignItems: 'center',
  },
  footerHere: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  list: {
    width: "75vw",
  },
  avatar: {
    backgroundColor: (note) => {
      return green[500]
    },
  },
}));

export default function Layoutcontainer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const list = () => (
    <div role="presentation">
      <List className={classes.list}>
        {[
          "Engineering",
          "Science",
          "Market",
          "Start-ups",
          "Technology",
          "Educational",
          "Funding",
          "Internet",
          "Electric Vehicles",
          "Research",
          "More",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemAvatar>
            <Avatar className={classes.avatar}>
              {
              text[0].toUpperCase()}
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const func = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} xs={10} >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.titleHere}><h2>Tech News Online</h2></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.navBarHere}>
              <AppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}  />
              <div>
                <Drawer open={drawerOpen} onClose={func} anchor='right'>
                  {list()}
                </Drawer>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12}>

            <Grid container spacing={1} className={classes.contentContainer}>

              <Grid item xs={9} className={classes.newsContent}>
                  <Grid container spacing={1} className={classes.newsRowOne} >
                      <Grid item xs={6}>
                          <Paper className={classes.paper}><h4>This is going to be the News 1</h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Donec tempus eget felis ac aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare luctus justo, sit amet tincidunt arcu ornare ac. Sed cursus suscipit mi ultricies sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Sed cursus suscipit mi ultricies sodales.
                          </Paper>
                      </Grid>
                      <Grid item xs={6}>
                          <Paper className={classes.paper}><h4>This is going to be the News 2</h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Donec tempus eget felis ac aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare luctus justo, sit amet tincidunt arcu ornare ac. Sed cursus suscipit mi ultricies sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Sed cursus suscipit mi ultricies sodales.
                          </Paper>
                      </Grid>
                      </Grid>
                      <Grid container spacing={1} className={classes.newsRowTwo}>
                      <Grid item xs={6}>
                          <Paper className={classes.paper}><h4>This is going to be the News 3</h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Donec tempus eget felis ac aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare luctus justo, sit amet tincidunt arcu ornare ac. Sed cursus suscipit mi ultricies sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Sed cursus suscipit mi ultricies sodales.
                          </Paper>
                      </Grid>
                      <Grid item xs={6}>
                          <Paper className={classes.paper}><h4>This is going to be the News 4</h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Donec tempus eget felis ac aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ornare luctus justo, sit amet tincidunt arcu ornare ac. Sed cursus suscipit mi ultricies sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eros. Sed cursus suscipit mi ultricies sodales.
                          </Paper>
                      </Grid>
                  </Grid>
              </Grid>

              <Grid item xs={3}>
              
                  <Grid container spacing={1} className={classes.referenceContent}>
                      <Grid item >
                          <Paper className={classes.paper}>This is going to be the content Block for <h5>www.learnwithengineers.com</h5></Paper>
                      </Grid>
                      <Grid item >
                          <Paper className={classes.paper}>This is going to be the reference block for <h5>techipedia.learnwithengineers.com</h5></Paper>
                      </Grid>
                      <Grid item >
                          <Paper className={classes.paper}>This is going to be the reference block for <h5>tools.learnwithengineers.com</h5></Paper>
                      </Grid>
                      <Grid item >
                          <Paper className={classes.paper}>This is going to be the reference block for <h5>Mini Ads</h5></Paper>
                      </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.footerHere}>This is going to be the Footer</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}