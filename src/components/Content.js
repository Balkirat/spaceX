import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Modal from "./Modal";
import Typography from "@material-ui/core/Typography";
import rocketImage from "../assets/rocket.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
    maxWidth: "60%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "25px"
  },
  inline: {
    display: "inline",
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const rocketsData = props.data.rockets;
  console.log(rocketsData);
  return (
      <>
      <Typography variant="h5">Active Rockets</Typography>
    <Paper>
      {rocketsData.map((data, index) => {
        return (
          <div key={index}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={rocketImage} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${data.name}`}
                  secondary={
                    <React.Fragment>
                      <Box
                        style={{ width: 400, whiteSpace: "nowrap" }}
                        my={2}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        bgcolor="background.paper"
                      >
                        {data.description}
                      </Box>
                    </React.Fragment>
                  }
                />
                <Modal modalData={data}/>
              </ListItem>

              <Divider variant="inset" component="li" />
            </List>
          </div>
        );
      })}
    </Paper>
    </>
  );
}
