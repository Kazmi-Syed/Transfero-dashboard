/* eslint-disable no-unused-vars */
import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../http/api';
import regex from '../../utils/regex';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import toast from '../../functions/toast';

import Tabpanel from '../NewCollaborators/components/TabPanel';

const Steep2 = ({ handleNext = () => {}, handleBack = () => {} }) => {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = form.handleSubmit(async () => {
    let tokenConvert = await localStorage.getItem('token');
    let tokenParse = JSON.parse(tokenConvert);
    let token = tokenParse.token;
    await api
      .get(`/papers/`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then((resp) => {
        if (resp !== null) {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <Grid container>
      <Typography variant="h2"> Account Information </Typography>
      <Typography variant="h5"> Update your account information </Typography>
      <Tabpanel />

      <Grid item xs={12}>
        <Button
          sx={{
            color: 'success.main',
            color: '#388e3C'
          }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          sx={{
            color: 'success.main',
            color: '#388e3c'
          }}
          onClick={handleSubmit}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Steep2;
