import React from 'react'
import './SeriesPanel.css'
import SeriesCard from '../SeriesCard'

const SeriesPanel = props => {

    return (
        <div className="seriesPanelContainer">
            <div className="seriesPanelHeader">
                <div className="seriesPanelHeaderText">
                    More in this Series
                </div>
            </div>
            <div className="seriesCard">
                <SeriesCard/>
            </div>
            <div className="seriesCard">
                <SeriesCard/>
            </div>
        </div>
    )
}

export default SeriesPanel