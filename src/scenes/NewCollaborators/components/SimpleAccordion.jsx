import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MultipleSelectCheckmarks from '../components/MultipleSelectCheckmarks';

export default function SimpleAccordion() {
  return (
    <div>
      <Typography>Transfero Systems</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>System 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultipleSelectCheckmarks />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>System 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultipleSelectCheckmarks />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>System 3 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultipleSelectCheckmarks />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
