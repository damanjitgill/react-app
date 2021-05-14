import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react'

const previousCourses  = [
    { key: 'INFT1004', text: 'INFT 1004', value: 'INFT1004' },
    { key: 'SENG1050', text: 'SENG1050', value: 'SENG1050' },
    { key: 'COMP1140', text: 'COMP1140', value: 'COMP1140' },
    { key: 'SENG2130', text: 'SENG2130', value: 'SENG2130' },
    { key: 'SENG2260', text: 'SENG2260', value: 'SENG2260' },
  ]

export  class Page3 extends Component {
    state = { previousCourses }

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      previousCourses: [{ text: value, value }, ...prevState.previousCourses],
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
                 Enter your degree and Major
                 </header>
                <br></br>
                <Container  maxWidth="sm" >
                  <Typography variant="h6" gutterBottom>

                     Previous Courses
        
                  </Typography>

                  <Dropdown
                     options={this.state.previousCourses}
                     placeholder='Choose Previous Courses'
                     search
                     selection
                     fluid
                     multiple
                     search
                     allowAdditions
                     value={currentValues}
                     onAddItem={this.handleAddition}
                     onChange={this.handleChange}
                  />
                  <br></br>

                   <div className="mt-3">
                         <NavLink to="/Major" className="btn-get-started"> Previous</NavLink>
                         
                         <NavLink to="/Load" className="btn-get-started"> Next</NavLink>
                      </div>
                </ Container>
            </div>
        )
    }
}