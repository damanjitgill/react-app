import React,{Component} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom";
import uni from "../image/uni.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Home extends Component {
    

    render(){
        return(
          <div>
            <Container  maxWidth="sm" >
      
    <Typography  variant="h3" gutterBottom>
    Program Advisory Tool
  </Typography>
  <br></br>
  <Typography  variant="body2" gutterBottom>
    A Fast and Easy way to schedule your Degree Path
    <br></br>
    <br></br>
    
    
    Simply Starts with adding your Degree, Major(s) and other major details.
    <br></br>
    <br></br>
    After completing step you can see your program plan 
  </Typography>
  <br></br>
  <div className="mt-3">
    <NavLink to="/Degree" className="btn-get-started" >Get Started</NavLink>
    
  </div>
    

  <div className="col-lg-6 order-1 order-lg-2 header-img">
      <img src={uni} className="img-fluid animated" alt="home img" width="400" height="4n00" />


    </div>

 
  



</Container>
  
</div>
        )
    }

}