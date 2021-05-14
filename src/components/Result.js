import React, { Component } from 'react'
import { Card,Header,Container } from 'semantic-ui-react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";


export  class Result extends Component {
    render() {
        return (
            <div>
     <Header as='h1' textAlign='center' icon='graduation cap' content='Program Plan' />
                <hr></hr>

                <Container fluid>

                <Typography variant="h6" gutterBottom>

                <Box textAlign="center"
                 fontFamily="Monospace"
                 >

                    2019

                </Box>

                </Typography>

  <Card.Group itemsPerRow={8}>
    
 
    
   

    <Card>
      <Card.Content
        header='SENG1110'
        meta='Object Oriented Programming'
        description='CORE'
        color='red'
      />
    </Card>

  
    <Card>
      <Card.Content
        header='COMP1010'
        meta='Computing Fundamentals '
        color='red'
        description='CORE'
      />
    </Card>
        
    <Card>
      <Card.Content
        header='INFT1004'
        meta='Introduction to Programming'
        color='red'
        description='CORE'
      />
    </Card>

    <Card
      header='Elective'
      meta=''
      description='1000 LEVEL ELECTIVE'
      color='red'
    />
    
    

   <Card
      header='COMP1140'
      meta='Database and Information Management'
      description='CORE'
      color='blue'
    />

   <Card
      header='SENG1050'
      meta='Web Technologies'
      description='CORE'
      color='blue'
    />

   <Card
      header=' ENGG1003 '
      meta='Introduction to Procedural Programming'
      description=' DIRECTED MAJOR '
      color='blue'
    />

   <Card
      header=' SENG1120'
      meta='Data Structures'
      description='SECOND MAJOR'
      color='blue'
    />

         </Card.Group>
         


         <hr></hr>
          
      

         

     <Typography variant="h6" gutterBottom>

     <Box textAlign="center"
         fontFamily="Monospace"
          >

       2020

      </Box>

       </Typography>
       <Card.Group itemsPerRow={8}>

   <Card
      header='SENG2130'
      meta='Systems Analysis and Design'
      description='CORE'
      color='red'
    />

   <Card
      header='INFT2031'
      meta='Systems and Network Administration'
      description='CORE'
      color='red'
    />

   <Card
      header='INFT2012'
      meta='Application Programming'
      description='Compulsory Course'
      color='red'
    />

<Card
      header='CMNS2016'
      meta='Social and Interactive Media'
      description='DIRECTED MAJOR'
      color='red'
    />
    <Card
      header='INFT2150'
      meta='Business Analysis'
      description='CORE'
      color='blue'
    />
    <Card
      header='SENG2260'
      meta='Human-Computer Interaction'
      description='CORE'
      color='blue'
    />
    <Card
      header='INFT2051'
      meta='Mobile Application Programming'
      description='Compulsory Course'
      color='blue'
    />
    <Card
      header='COMP2240'
      meta='Operating Systems'
      description='SECOND MAJOR'
      color='blue'
    />

        </Card.Group>
        <hr></hr>
        

       <Typography variant="h6" gutterBottom>

         <Box textAlign="center"
              fontFamily="Monospace"
           >

            2021

        </Box>

          </Typography>

          <Card.Group itemsPerRow={8}>
    <Card
      header='INFT3800'
      meta='Professional Practice in Information Technology'
      description='CORE'
      color='red'
    />
    <Card
      header='INFT3100'
      meta='Project Management'
      description='CORE'
      color='red'
    />
    <Card
      header='COMP3851A'
      meta='Computer Science and Information Technology Work Integrated Learning Part A '
      description='COMPLUSORY'
      color='red'
    />
    <Card
      header='INFT3050'
      meta='Web Programming'
      description='COMPULSORY'
      color='red'
    />
    <Card
      header='COMP3851B'
      meta='Computer Science and Information Technology Work Integrated Learning Part B'
      description='COMPUSLORY'
      extra='Must be taken following COMP3851A'
      color='blue'
    />
    <Card
      header='INFT3960'
      meta='Games Production'
      description='DIRECTED MAJOR'
      color='blue'
    />
    <Card
      header='COMP3500'
      meta='Security Attacks: Analysis and Mitigation Strategies'
      description='SECOND MAJOR'
      color='blue'
    />
    <Card
      header='COMP3350'
      meta='Advanced Database'
      description='SECOND MAJOR'
      color='blue'
    />
   

  </Card.Group>

  <br></br>
  <br></br>

  <Typography variant="subtitle2" gutterBottom>
                  <Box fontWeight="fontWeightBold" m={1}>
                    <li>Subjects Offers in Semester One are in Red Colour </li>
                    <li>Subjects Offers in Semester Two are in Blue Colour </li>
                    

                   
                  </Box>
                  </Typography>


                
                  <Typography variant="h6" gutterBottom>
                  <Box fontWeight="fontWeightBold" m={1}>

                  To be eligible to graduate make sure you have completed 240 units (10 units = 1 course unless otherwise specified) which meet the following criteria:
                  </Box>
                  </Typography>

                  <Typography variant="subtitle1" gutterBottom color="textSecondary">
                      <Box m={2}>
                  <li>Core courses – 100 units </li>
                  <li> Major courses – 80 units</li>
                  <li>Elective courses – 60 units</li>
                  <Box m={4}>
                  Students may utilise their electives to instead complete a second major. For a second major, 60 units must be unique to that major, and at least 20 units must be at
                  3000 level. COMP3851A and COMP3851B will also count towards the second major
                  </Box>
                  

                  <li>The duration of this program is 3 years full-time (40 units per semester) or part-time equivalent</li> 
                 <li> The maximum time to complete this program is 8 years</li>
                 <li> Students must not exceed 240 units in this program</li>
                   <li> Students must not exceed 100 units at 1000 level in this program; students should consider this when selecting their elective and directed courses.</li>
                   
                  </Box>
                  </Typography>

                  <div className="mt-3">
                         <NavLink to="/" className="btn-go-back" > Home Page</NavLink>
                        
                      </div>


                      </Container>

                  



  
            </div>
        )
    }
}