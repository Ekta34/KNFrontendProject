import React from 'react'
import './HomeData.css'
import DataPanel from '../DataPanel'
import SeriesPanel from '../SeriesPanel';

const HomeData = props => {

    return (
        <div className="homeDataContainer">
            <DataPanel/>
            <SeriesPanel/>
        </div>
    )
}

export default HomeData