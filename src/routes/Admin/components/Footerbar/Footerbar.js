import React from 'react'
import './Footerbar.css'
import {Grid, Row, Col} from 'react-bootstrap'

class Footerbar extends React.Component{

  render(){
    return(
        <div className="footerContainer">
          <Grid>
            <Row className="footerRow text-center">
              <Col className="footerCol">
                  <div className="footerHeder">About us</div>
                  <div className="footerContent">Contact</div>
                  <div className="footerContent">Address</div>
                  <div className="footerContent">Work</div>
                  <div className="footerContent">Growth</div>
              </Col>
              <Col className="footerCol">
                  <div className="footerHeder">Cities</div>
                  <div className="footerContent">Ahmedabad</div>
                  <div className="footerContent">Mumbai</div>
                  <div className="footerContent">Pune</div>
              </Col>
              <Col className="footerCol">
                  <div className="footerHeder">Parteners</div>
                  <div className="footerContent">Facebook</div>
                  <div className="footerContent">Instagram</div>
                  <div className="footerContent">Youtube</div>
                  <div className="footerContent">Gmail</div>
              </Col>
            </Row>
            </Grid>
        </div>
    )
  }
}

export default Footerbar
