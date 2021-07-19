import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridLayout from 'react-grid-layout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "white",
    background: 'green'
  },
}));

export default function NestedGrid() {
  const classes = useStyles();
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2},
    {i: 'b', x: 1, y: 0, w: 3, h: 2},
    {i: 'c', x: 3, y: 0, w: 1, h: 2}
    ];
  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=4</Paper>
  //       </Grid>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=4</Paper>
  //       </Grid>
  //       <Grid item xs={3}>
  //         <Paper className={classes.paper}>xs=4</Paper>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return (
    <div className={classes.root}>
       
      <Grid container sm={6} spacing={3}>
        <Grid  key="a" item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid key="b" item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid key="c" item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>xs=10</Paper>
        </Grid>
      </Grid>
       
    </div>
  );
}