import React,{useContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {MyContext} from '../Context/ContextProvicer'
import NumberFormat from 'react-number-format';

const useStyles = makeStyles({
  root: {
    margin: '20px 10px 10px 10px'
  },
  infoCardConfirmed: {
    borderBottom : '4px solid #3299CC',
    minHeight: 100
  },
  infoCardRecovered: {
    borderBottom : '4px solid #228B22',
    minHeight: 100
  },
  infoCardDeaths: {
    borderBottom : '4px solid #800000',
    minHeight: 100
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MainPage() {
  const classes = useStyles();
  const {state:{confirmed, recovered, deaths}, getAllData} = useContext(MyContext)
   useEffect(() => {
    getAllData()
   }, [])

  if(!confirmed)
  {
    return null
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4} sm={6}>
          <Card className={classes.infoCardConfirmed} variant="outlined">
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Confirmed
              </Typography>
              <Typography variant="h5" component="h2" className={classes.pos} color="textSecondary">
                <NumberFormat value={confirmed? confirmed.value: ''} displayType={'text'} thousandSeparator={true} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={6}>
          <Card className={classes.infoCardRecovered} variant="outlined">
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2" className={classes.pos} color="textSecondary">
                <NumberFormat value={recovered? recovered.value: ''} displayType={'text'} thousandSeparator={true} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={4} sm={6}>
          <Card className={classes.infoCardDeaths} variant="outlined" elevation={4}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2" className={classes.pos} color="textSecondary">
                <NumberFormat value={deaths? deaths.value: ''} displayType={'text'} thousandSeparator={true} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    
  );
}
