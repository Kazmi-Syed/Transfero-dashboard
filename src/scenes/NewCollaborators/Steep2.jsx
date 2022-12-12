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

import Tabpanel from '../NewCollaborators/components/TabPanel';

const Steep2 = ({ handleNext = () => {}, handleBack = () => {} }) => {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = form.handleSubmit(async ({ email }) => {
    // TODO: chamar API de verificar usuário aqui
    setTimeout(() => {
      handleNext();
    }, 2000);
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
