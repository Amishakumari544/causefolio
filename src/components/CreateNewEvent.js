import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import DrawerLayout from 'src/layouts/DrawerLayout';
import {
  Button,
  Card,
  Grid,
  Box,
  Typography,
  Divider,
  TextField
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    background: '#FFFFFF',
    borderRadius: '20px',
    fontSize: '16px',
  },
  divider: {
    width: '450px',
    height: '2px',
    backgroundColor: '#291757'
  },
  cancelbtn: {
    background: '#291757',
    color: '#FFF',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    marginRight: '15px'
  },
  createbtn: {
    marginTop: '60px',
    marginLeft: '40px'
  },
  addbtn: {
    background: '#291757',
    color: '#FFF',
    width: '200px',
    height: '38px',
    borderRadius: '20px'
    // marginRight:'60px',
  },
  inputDiv: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '17px',
    width: '451px',
    marginBottom: '10px',
    height: '70px'
  },
  input1: {
    border: '0',
    padding: '10px',
    width: '260px',
    background: 'transparent',
    outline: '0'
  },
  input: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '15px',
    border: 'none',
    width: '450px',
    height: '43px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 15px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '12px'
  },
  date: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '25px',
    border: 'none',
    width: '200px',
    height: '43px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 15px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '12px'
  },
  image: {
    marginLeft: '71px',
    width: '350px',
    height: '183px',
    marginTop: '55px',
    background: '#473672',
    borderRadius: '40px',
    [theme.breakpoints.down('xs')]: {
      height: '220px',
      marginTop: '45px',
      width: '253px'
    }
  },
  description: {
    background: 'rgba(42, 23, 89, 0.25)',
    borderRadius: '25px',
    border: 'none',
    width: '450px',
    height: '75px',
    fontWeight: 'bold',
    color: '#3291755',
    padding: '0px 13px 0px 15px',
    '&:focus': {
      outline: 'none'
    },
    marginBottom: '4px'
  },
  topContainer: {
    width: '150%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  },
  topText: {
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  text: {
    color: '#FFF',
    textAlign: 'center'
    // marginTop: '130px'
  },
  gallery: {
    marginLeft: '124px',
    width: '100px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '71px',
    }

  },
  button: {
    marginTop: '8px',
    width: '200px',
    height: '38px',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '13px',
    background: '#291757',
    [theme.breakpoints.down('xs')]: {
      marginTop: '29px',
      marginLeft: '215px'
    }
  },
  textField: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  paddingRight: {
    paddingRight: '80px'
  }
}));

function CreateNewEvent() {
  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date('2014-08-18T21:11:54')
  // );
  const classes = useStyles();

  useEffect(() => { }, []);
  return (
    <DrawerLayout>
      <div className={classes.root}>
        <Box display="flex" style={{ width: '100%' }}>
          <Box flexGrow={1}>
            <Grid container>
              <Grid item className={classes.topContainer}>
                <Typography variant="h1" className={classes.topText}>
                  New Event
              </Typography>
              </Grid>
            </Grid>
            <Grid container className={classes.event}>
              <Grid style={{ width: '100%' }}>
                <TextField
                  placeholder="Enter name of the event"
                  className={classes.textField}
                  fullWidth
                  name="email"
                  type="email"
                  variant="outlined"
                //   onChange={handleChange}
                />

                <TextField
                  placeholder="Add Description of the event"
                  className={classes.textField}
                  multiline
                  fullWidth
                  name="email"
                  type="email"
                  variant="outlined"
                //   onChange={handleChange}
                />

                <Grid container>
                  <Grid item xs={12} sm={12} md={6}>
                    <input
                      id="date"
                      label="Birthday"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.date}
                      InputLabelProps={{
                        shrink: true
                      }}
                      style={{ marginRight: '30px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      fullWidth
                      className={classes.textField}

                      placeholder="Event Time"
                      name="time"
                      type="time"
                      variant="outlined"
                    //   onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  className={classes.textField}
                  placeholder="Event link / Registration link"
                  name="email"
                  type="email"
                  variant="outlined"
                //   onChange={handleChange}
                />
                <div className={classes.inputDiv}>
                  <input
                    className={classes.input1}
                    placeholder="Speaker name"
                    name="name"
                    type="name"
                    variant="outlined"
                    style={{ marginBottom: '0px' }}
                  //   onChange={handleChange}
                  />
                  <Divider className={classes.divider} />

                  <input
                    placeholder="Speaker LinkedIn profile link"
                    className={classes.input1}
                    name="email"
                    type="email"
                    variant="outlined"
                  //   onChange={handleChange}
                  />
                </div>

                <Button className={classes.button}>Add Speaker</Button>
                {/* </div> */}
              </Grid>
            </Grid>
            <div className={classes.createbtn}>
              <Button className={classes.cancelbtn}>Cancel</Button>
              <Button className={classes.addbtn}>Create</Button>
            </div>
          </Box>
          <Box maxWidth="28em" minWidth="24em" className={classes.paddingRight}>
            <Card className={classes.image}>
              <img
                src="/static/images/gallery.svg"
                alt="gallery-icon"
                className={classes.gallery}
              />
              <h3 className={classes.text}>Add a banner image</h3>
            </Card>
            <img
              src="/static/images/event_img.svg"
              alt="gallery-icon"
              style={{ marginLeft: '51px', marginTop: '20px' }}
            />
          </Box>
        </Box>
      </div>
    </DrawerLayout>
  );
}

export default CreateNewEvent;
