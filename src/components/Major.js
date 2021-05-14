import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { Dropdown,Icon } from 'semantic-ui-react'



const options  = [
    { key: 'Interactive Media', text: 'Interactive Media', value: 'Interactive Media' },
    { key: 'System Development', text: 'System Development', value: 'System Development' },
    { key: 'Business Technology', text: 'Business Technology', value: 'Business Technology' },
   
  ]

export  class Major extends Component {
    state = { options }

    handleAddition = (e, { value }) => {
      this.setState((prevState) => ({
        options: [{ text: value, value }, ...prevState.options],
      }))
    }
  
    handleChange = (e, { value }) => this.setState({ currentValues: value })

    

    render() {
        const { currentValues } = this.state
         
        
       
        return (
         <div>
            <header className="App-header">
            <Icon name='graduation cap'
                  size='large' 
                  />
              Enter your Major(s)
              </header>
            <br></br>
            <Container  maxWidth="sm" >
              <Typography variant="h6" gutterBottom>

                 Enter your Major(s)
    
              </Typography>
              
                      
              <Dropdown
        options={this.state.options}
        placeholder='Enter you Major(s)'
        search
        selection
        fluid
        multiple
        allowAdditions
        value={currentValues}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
               
                  
    

                  <div className="mt-3">
                         <NavLink to="/Degree" className="btn-get-started"> Previous</NavLink>
                         
                         <NavLink to="/Courses" className="btn-get-started"> Next</NavLink>
                      </div>

                  </Container>

            </div>


        )
    }
}
