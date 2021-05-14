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

export function Page4 () {
     {
         const classes = useStyles();
         const [value, setValue] = useState("");
         const handleChange = e => setValue(e.target.value);
         const year=[
            {
                id:1,
                Name:"2016"
        
            },
            {
                id:2,
                Name:"2017"
        
            },
            {
                id:3,
                Name:"2018"
            },
            {
                id:4,
                Name:"2019"
            },
            {
                id:5,
                Name:"2020"
            },
            {
                id:6,
                Name:"2021"
            },
            {
                id:7,
                Name:"2022"
            },
            {
                id:8,
                Name:"2023"
            },
            {
                id:9,
                Name:"2024"
            },
            {
                id:10,
                Name:"2025"
            },

         ];

         const sems=[
            {
                id:1,
                Name:"First Semester"
        
            },
            {
                id:2,
                Name:"Second Semester"
        
            },

         ];

         const cousrseLoad=[
            {
                id:1,
                Name:"40 units"
        
            },
            {
                id:2,
                Name:"30 units"
        
            },
            {
                id:2,
                Name:"30 units"
        
            },
            {
                id:3,
                Name:"20 units"
        
            },

         ]



        return (
            <div>
                <header className="App-header" >
                
                  <Icon name='graduation cap'
                  size='large' 
                  />
      
                
                    ENTER MISCELLANEOUS
                    </header>
                   
                <br></br>
                <Container  maxWidth="sm" >
                  <Typography variant="h6" gutterBottom>

                      Start Year
        
                  </Typography>
                  <FormControl className={classes.FormControl}>
                      <InputLabel>What year did/will you start?</InputLabel>
                  <Select onChange={handleChange}>
                  {
                          year.map(startYear =>{
                              return (
                                  <MenuItem key={startYear.Name} value={startYear.id}>{startYear.Name}</MenuItem>
                              )
                          })
                      }
                  </Select>
                  </FormControl>
                  <hr></hr>
                  
               <Typography variant="h6" gutterBottom>

                      Semsester Commencing
        
                  </Typography>
                  <FormControl className={classes.FormControl}>
                      <InputLabel>What semester did you start?</InputLabel>
                  <Select onChange={handleChange}>
                  {
                          sems.map(semsCom =>{
                              return (
                                  <MenuItem key={semsCom.Name} value={semsCom.id}>{semsCom.Name}</MenuItem>
                              )
                          })
                      }
                  </Select>
                  </FormControl>
                  <br></br>
                  <Typography variant="h6" gutterBottom>

                     Default Course Load
        
                  </Typography>
                  <FormControl className={classes.FormControl}>
                      <InputLabel>How many units want to do per Semester?</InputLabel>
                  <Select onChange={handleChange}>
                  {
                          cousrseLoad.map(load =>{
                              return (
                                  <MenuItem key={load.Name} value={load.id}>{load.Name}</MenuItem>
                              )
                          })
                      }
                  </Select>
                  </FormControl>


                  <br></br>
                      <div className="mt-3">
                         <NavLink to="/Courses" className="btn-get-started"> Previous</NavLink>
                         
                         <NavLink to="/Result" className="btn-get-started"> Plan My Degree </NavLink>
                      </div>
                     

             
                  
                </Container>
            </div>
        )
    }
}
