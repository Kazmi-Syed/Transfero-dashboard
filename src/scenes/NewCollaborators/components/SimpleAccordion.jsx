import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MultipleSelectCheckmarks from '../components/MultipleSelectCheckmarks';
import api from '../../../http/api';

export default function SimpleAccordion() {
  let nomePaper1 = []
  let nomePaper2 = []
  let nomePaper3 = []
  const paper = async () => {
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
      .then(async (resp) => {
        if (resp !== null) {
          let system = resp.data;
          let teste = [];
          await system.forEach(async (item) => {
            let obj = {
              system_id: item.system_id
            };
            await teste.push(obj);
          });

          let arraySystemId1 = [];
          function buscarId1(value) {
            let systemIdConvert = value;
            let systemId1 = systemIdConvert.system_id;
            if (systemId1 === 1) return arraySystemId1.push(systemId1);
          }
          let systemsId1 = system.filter(buscarId1);

          systemsId1.forEach(async item => {
            let obj = item.name
            await nomePaper1.push(obj)
          })

          let arraySystemId2 = [];
          function buscarId2(value) {
            let systemIdConvert = value;
            let systemId2 = systemIdConvert.system_id;
            if (systemId2 === 2) return arraySystemId2.push(systemId2);
          }
          let systemsId2 = system.filter(buscarId2);

          systemsId2.forEach(async item => {
            let obj = item.name
            await nomePaper2.push(obj)
          })

          let arraySystemId3 = [];
          function buscarId3(value) {
            let systemIdConvert = value;
            let systemId3 = systemIdConvert.system_id;
            if (systemId3 === 3) return arraySystemId3.push(systemId3);
          }
          let systemsId3 = system.filter(buscarId3);
          
          systemsId3.forEach(async item => {
            let obj = item.name
            await nomePaper3.push(obj)
          })

          // console.log(nomePaper2)
          // console.log(nomePaper3)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    paper();
  });

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
          <MultipleSelectCheckmarks
            paperName1={nomePaper1}
          />
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
          <MultipleSelectCheckmarks
              paperName2={nomePaper2}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>System 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MultipleSelectCheckmarks
              paperName3={nomePaper3}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
