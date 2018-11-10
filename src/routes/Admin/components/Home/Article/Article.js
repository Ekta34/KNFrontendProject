import React from 'react'
import './Article.css'
import {Grid, Row, Col} from 'react-bootstrap'
import foodimage from '../foodimage.jpg'
import ArticleCard from '../ArticleCard/ArticleCard';

const Article = props => {

    return (
        <Grid className="articleContainer">
            <Row className="show-grid articleRow">
                <Col xs={12} sm={12} md={4} className="articleCol">
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={4} className="articleCol">
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={4} className="articleCol">
                    <ArticleCard/>
                </Col>
            </Row>
            <Row className="show-grid  articleRow">
                <Col xs={12} sm={12} md={4} className="articleCol">
                    <ArticleCard/>
                </Col>
                <Col xs={12} sm={12} md={4} className="articleCol">
                    <ArticleCard/>
                </Col>
            </Row>
        </Grid>
    )
}

export default Article