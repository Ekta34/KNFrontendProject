import React from 'react'
import './HomeView.css'
import {Grid, Row, Col} from 'react-bootstrap'
import HomeData from '../HomeData';
import SubMenu from '../SubMenu';
import Article from '../Article'

const HomeView = props => {

    return (
        <div className="homeViewContainer">
        <Grid>
            <Row className="homeViewRow">
                <Col xs={12} sm={12} md={8} lg={9} className="homeViewCol">
                    <HomeData/>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} className="homeViewCol">
                    <SubMenu/>
                </Col>
            </Row>
            <div className="articleHeader">
                <div className="articleHeaderText">Related Articles</div>
            </div>
            <Article/>
        </Grid>
        </div>
    )
}

export default HomeView