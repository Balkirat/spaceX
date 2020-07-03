import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import rocketImage from "../assets/rocket.jpg";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles({
  image: {
    width: "295px",
    height: "455px",
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Modal(props) {
  const [open, setOpen] = React.useState(false);
  const data = props.modalData;
  console.log("data in modal", props.modalData);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        More Info
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Grid container >
          <Grid item xs={6}>
            <img className={classes.image} src={rocketImage} alt="rocket"></img>
          </Grid>

          <Grid container xs={6} spacing={1}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {data.name}
            </DialogTitle>

            <Grid item>
              <Typography>Cost/Launch ${data.cost_per_launch}</Typography>
            </Grid>
            <Grid item>
              <Typography>Height {data.height.meters} M</Typography>
            </Grid>
            <Grid item>
              <Typography>Diameter {data.diameter.meters} M</Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom>{data.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
