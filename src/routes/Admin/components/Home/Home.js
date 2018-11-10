import React from 'react'
import './Home.css'
import {Jumbotron, Grid, Row, Col} from 'react-bootstrap'
import HomeView from './HomeView';

const Home = props => {

    return (
        <div className="homeContainer">
            <div className="subHeader">
                <div className="subHeaderText1">Orci cursus urna feugiat ut etiam posuere,</div>
                <div className="subHeaderText2">nibh fames ultricies netus donec fewfe habitant,</div>
                <div className="subHeaderText3">auctor vitae felis sed sem tellus.</div>
            </div>
            <div style={{width:'100%'}}>
            <HomeView />
            </div>
            
        </div>
    )
}

export default Home