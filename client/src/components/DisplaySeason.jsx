import './DisplaySeason.css';
import React from 'react';

const SEASON_CONFIG = {
    winter: {
        iconName: 'snowflake',
        text: 'It is darn cold outside'
    },
    summer: {
        iconName: 'sun',
        text: 'I\'m going to need three showers a day'
    }
}

const DisplaySeason = props => {
    const season = _getCurrentSeason(props.latitude, new Date().getMonth());
    const {text, iconName} = SEASON_CONFIG[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`left-icon massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`right-icon massive ${iconName} icon`}/>
        </div>
    )

}

function _getCurrentSeason(lat, month) {
    console.log(month)
    console.log(lat)
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default DisplaySeason;