import React from 'react'
import './ArticleCard.css'
import {Grid, Row, Col} from 'react-bootstrap'
import foodimage from '../foodimage.jpg'

const ArticleCard = props => {

    return (
        <div className="articleCardContainer">
            <div className="articleImageContainer"></div>
            <div className="articleData">
                <div className="articleCardHeader">
                    <div className="articleCardHeaderText">Pharetra gravida sapien</div>
                </div>
                <div className="articleCardDetail">
                    <div className="articleCardDetailText">
                        Netus varius integer vestibulum sapien leo enim a mollis, est feugiat quam feugiat 
                        etiam aliquam eleifend commodo vulputate velit senectus proin dictumst non semper 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard