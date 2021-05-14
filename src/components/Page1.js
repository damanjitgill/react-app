import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react'

const useStyles = makeStyles(theme => ({
    FormControl:{
        minWidth:500
    }
})
    );

export function Page1 () {
     {
         const classes = useStyles();
         const [value, setValue] = useState("");
         const handleChange = e => setValue(e.target.value);
         const degrees=[
            {
                id:1,
                Name:"Bachelors Of Information Technology"
        
            },
            {
                id:2,
                Name:"Bachelors Of Computer Science"
        
            },
            {
                id:3,
                Name:"Bachelors Of Medicine"
            },
            {
                id:4,
                Name:"Bachelors in Electrical"
            },
            {
                id:5,
                Name:"Bachelors Of Civil Engneering"
            }

         ];

         const campus=[
            {
                id:1,
                Name:"Callaghan"
        
            },
            {
                id:2,
                Name:"NUSpace"
        
            },
            {
                id:3,
                Name:"Ourimbah"
            },
            {
                id:4,
                Name:"Online"
            },

         ];
        return (
            <div>
                <header className="App-header">
                <Icon name='graduation cap'
                  size='large' 
                  />
                    Enter your degree and Major</header>
                <br></br>
                <Container  maxWidth="sm" >
                  <Typography variant="h6" gutterBottom>

                      Degree
        
                  </Typography>
                  <FormControl className={classes.FormControl}>
                      <InputLabel>Whats your Degree</InputLabel>
                  <Select onChange={handleChange}>
                  {
                          degrees.map(uniDegree =>{
                              return (
                                  <MenuItem key={uniDegree.Name} value={uniDegree.id}>{uniDegree.Name}</MenuItem>
                              )
                          })
                      }
                  </Select>
                  </FormControl>
                  <hr></hr>
                  
               <Typography variant="h6" gutterBottom>

                      Campus
        
                  </Typography>
                  <FormControl className={classes.FormControl}>
                      <InputLabel>Whats your Campus</InputLabel>
                  <Select onChange={handleChange}>
                  {
                          campus.map(uniCampus =>{
                              return (
                                  <MenuItem key={uniCampus.Name} value={uniCampus.id}>{uniCampus.Name}</MenuItem>
                              )
                          })
                      }
                  </Select>
                  </FormControl>
                  <br></br>
                  <br></br>
                      <div className="mt-3">
                         <NavLink to="/" className="btn-get-started"> Previous</NavLink>
                         
                         <NavLink to="/Major" className="btn-get-started"> Next</NavLink>
                      </div>
                     

             
                  
                </Container>
            </div>
        )
    }
}
