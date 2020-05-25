import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function BookReadDialog({book}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleAdd(){
    const changedBook={
      name: book.name,
      author: book.author,
      dateOfRead: new Date()
    }
    try {
      const res = await fetch('/api/books/' + book._id, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(changedBook) 
      })
      const data = await res.json()
      console.log(data)
      setOpen(false)
      return data
    } catch (err) {
      return err
    }
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Przeczytana
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Przeczytana</DialogTitle>
        <DialogContent>
          Czy przeczytałeś tą książkę?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Nie
          </Button>
          <Button onClick={handleAdd} color="primary">
            Tak
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}