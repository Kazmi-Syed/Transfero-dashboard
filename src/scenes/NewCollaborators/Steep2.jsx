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
import ConfirmationDialogRaw from '../../system/System';

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
      <div>
        <br />
        <br />
        <Typography>Transfero Systems</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Design</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ConfirmationDialogRaw />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Finance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ConfirmationDialogRaw />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Travel </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ConfirmationDialogRaw />
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Devops</Typography>
          </AccordionSummary>
        </Accordion>
      </div>

      <Grid item xs={12}>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleSubmit}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default Steep2;
