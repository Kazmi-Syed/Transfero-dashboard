import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import InfoIcon from '@mui/icons-material/Info';



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




const systems = [ 
  'ROLE #1',
  'ROLE #2',
  'ROLE #3',
  'ROLE #4',
 
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 320}}>
        <InputLabel  id="demo-multiple-checkbox-label">System</InputLabel>
        <Select
         
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {systems.map((systems) => (
            <MenuItem key={systems} value={systems}>
              <Checkbox  color="success" checked={personName.indexOf(systems) > -1} />
              <ListItemText  primary={systems} />

                            
            </MenuItem>

            
          ))}
        </Select>
      </FormControl>
    </div>
  );
}