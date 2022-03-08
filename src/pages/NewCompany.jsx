import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginCaption from '../utils/login/loginCaption';
import { Button, Link, TextField } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function NewCompany() {
  const classes = useStyles();
  const history = useHistory();
  function openNewCompany(){
    history.push("/newCompany")
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LoginCaption />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Yeni Şirket Kayıt Formu
        </Grid>
      </Grid>
      <center>
      <Grid container spacing={3} xs={8}>
        <Grid item xs={12}>
        <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="username"
            label="Kullanıcı Adınız"
            name="username"
            autoFocus
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="password"
            label="Şifrenizi girin."
            name="password"
            type="password"
          />
           <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="rePassword"
            label="Şifrenizi Tekrar girin."
            name="password"
            type="password"
          />
           <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="adress"
            label="Adress girin."
            name="Adress"
            type="Adress"
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="Phone"
            label="Telefon Numara girin."
            name="phone"
            type="phone"
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="Email"
            label="Email girin."
            name="email"
            type="email"
          />
          <TextField  variant="outlined"  margin="normal"  required  fullWidth
            id="Website"
            label="Website girin."
            name="website"
            type="website"
          />
           <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
             >
            Şirket Kaydını YAP
          </Button>
        </Grid>

      </Grid>
      </center>
    </div>
  );
}
