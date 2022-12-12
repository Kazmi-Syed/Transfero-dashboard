import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MultipleSelectCheckmarks from '../components/MultipleSelectCheckmarks'


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
            <Typography>System A</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <MultipleSelectCheckmarks/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>System B</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <MultipleSelectCheckmarks/>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>System C </Typography>
          </AccordionSummary>
          <AccordionDetails>
           <MultipleSelectCheckmarks/>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>System D </Typography>
          </AccordionSummary>
        </Accordion>
      </div>
        
  );
}