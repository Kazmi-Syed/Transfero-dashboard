import React, { useEffect } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
}

export default function CheckboxList(props) {
  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = React.useState(false);

  let roleName = [0, 1, 2, 3];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  async function tela() {
    let name = await props.paper1;
    let tamanho = await name?.length;
    let paper1 = name?.slice(tamanho / 2);
    document.getElementById('lista').innerHTML = await paper1
      .map(
        (item) => `
      <li style='
          border: 1px solid black;
          border-left: none; 
          border-right: none; 
          margin: 5px 0; 
          padding: 10px 0; 
          font-size: 18px'>
          <input type="checkbox" id=${item} value=${item}>
         ${item}
         <button ></button>
      </li>
    `
      )
      .join('')
  }

  useEffect(() => {
    tela();
  }, []);
  return (
    <>
      <ul id="lista"></ul>
    </>
  );
}
