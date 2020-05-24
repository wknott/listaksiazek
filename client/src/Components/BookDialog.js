import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [date, setDate] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleAdd(){
    const newBook={
      name: name,
      author: author,
      date: date
    }
    console.log(newBook)
    setName('')
    setAuthor('')
    setDate()
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Dodaj książkę
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nowa książka</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tytuł"
            type="text"
            fullWidth
            value={name}
            onChange={e =>setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="author"
            label="Autor"
            type="text"
            fullWidth
            value={author}
            onChange={e =>setAuthor(e.target.value)}
          />
          <TextField
            id="date"
            label="Data przeczytania"
            type="date"
            defaultValue={"2020-05-20"}
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={e =>setDate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button disabled={name.length<3 || author.length<3} onClick={handleAdd} color="primary">
            Dodaj książkę
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}