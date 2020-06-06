import React, {useState,useEffect} from 'react'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function YearSelect({books, selectedYear, setSelectedYear}){
  const classes = useStyles();
  const [years, setYears] = useState([])
  const handleChange = (event) => {
    setSelectedYear(event.target.value)
  };

  function getYears(){
    const years = new Set(books.filter(book=>book.dateOfRead !== undefined).map(book => new Date(book.dateOfRead).getFullYear()))
    setYears(Array.from(years).sort())
  }

  useEffect(() => {
    getYears()
  },[books])
  return(
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="year-select-label">Wybierz Rok</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={selectedYear}
          onChange={handleChange}
        >
            <MenuItem key={'key'} value={''}>Wszystkie książki</MenuItem> 
          {years.map((year,index) => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
          
        </Select>
      </FormControl>

    </div>
    
  )
}