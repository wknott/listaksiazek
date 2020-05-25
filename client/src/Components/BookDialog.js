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
  const [dateOfRead, setDateOfRead] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleAdd(){
    const newBook={
      name: name,
      author: author,
      dateOfRead: dateOfRead
    }

    console.log(newBook)
    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook) 
      })
      const data = await res.json()
      console.log(data)
      setName('')
      setAuthor('')
      setDateOfRead()
      setOpen(false)
      return data
    } catch (err) {
      return err
    }
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
            id="dateOfRead"
            label="Data przeczytania"
            type="date"
            defaultValue={"2020-05-20"}
            InputLabelProps={{
              shrink: true,
            }}
            value={dateOfRead}
            onChange={e =>setDateOfRead(e.target.value)}
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