import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    display: 'table',
    margin: '0 auto',
    marginTop: '20%',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Progress() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}