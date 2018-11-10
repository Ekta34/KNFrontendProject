import React from 'react'
import './SeriesCard.css'
import {Grid, Row, Col} from 'react-bootstrap'
import foodimage from '../foodimage.jpg'

const SeriesCard = props => {

    return (
        <Grid>
            <Row className="seriesCardContainer">
                <Col xs={12} sm={12} md={4} lg={4} className="seriesCardImageContainer">
                   
                </Col>
                <Col xs={12} sm={12} md={8} lg={8} className="seriesCardData">
                    <div className="seriesCardHeader">
                        <div className="seriesCardHeaderText">
                            Duis sociosqu accumsan viverra 
                        </div>
                    </div>
                    <div className="seriesCardDeatil">
                        <div className="seriesCardDetailText">
                            Vivamus sapien sodales molestie lacinia pharetra mollis accumsan adipiscing
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default SeriesCard