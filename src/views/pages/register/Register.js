import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DrawerLayout from 'src/layouts/DrawerLayout';
import {
  Button,
  Grid,
  Box,
  Typography,
  TextField,
  InputBase
} from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '80%',
    height: '473px',
    background: '#FFFFFF',
    borderRadius: '20px',
    fontSize: '16px',
    [theme.breakpoints.down('xs')]: {
      height: '793px',
      width: '353px'
    }
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
    // marginLeft: '124px',
    width: '20%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '71px'
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
  desc: {
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
  socialLinks: {
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#CCD2E3',
    borderRadius: '20px',
    padding: '20px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF',
      borderRadius: '20px'
    }
  },
  social: {
    borderBottom: '1.3px solid #291757',
    marginBottom: '10px'
  },
  registerButton: {
    width: '140px',
    backgroundColor: '#291757',
    borderRadius: '20px',
    padding: '5px',
    marginLeft: '16px',
    marginTop: 12,
    marginBottom: 16,
    '&:hover': {
      backgroundColor: '#101c4c'
    }
  }
}));

function Register() {
  const classes = useStyles();

  return (
    <DrawerLayout>
      <div className={classes.root}>
        <Grid container>
          <Box display="flex">
            <Box flexGrow={1}>
              <Grid container>
                <Grid item className={classes.topContainer}>
                  <Typography variant="h1" className={classes.topText}>
                    Register
                  </Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.event}>
                <Grid className={classes.eventText}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    placeholder="Your Full Name"
                  />
                  <TextField
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    placeholder="Your Role(Ex: Software Developer)"
                  />
                  <TextField
                    className={classes.textField}
                    multiline
                    rows={5}
                    fullWidth
                    variant="outlined"
                    placeholder="A Little About You"
                  />
                  {/* Social Links */}
                  <fieldset className={classes.socialLinks}>
                    <InputBase
                      className={classes.social}
                      fullWidth
                      placeholder="GitHub Link"
                    />
                    <InputBase
                      className={classes.social}
                      fullWidth
                      placeholder="LinkedIn Link"
                    />
                    <InputBase
                      className={classes.social}
                      fullWidth
                      placeholder="Twitter Link"
                    />
                    <InputBase fullWidth placeholder="Personal Website" />
                  </fieldset>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    variant="outlined"
                    placeholder="Interested In (Separate By Comma(,))"
                  />
                  <Button className={classes.registerButton}>
                    <Typography style={{ color: '#fff' }}>
                      Register Me
                    </Typography>
                  </Button>{' '}
                </Grid>
              </Grid>
            </Box>
            <Box maxWidth="28em" minWidth="24em">
              <img
                src=".././static/images/event_img.jpg"
                alt="gallery-icon"
                style={{ marginLeft: '51px', marginTop: '20px' }}
              />
            </Box>
          </Box>
        </Grid>
      </div>
    </DrawerLayout>
  );
}

export default Register;
