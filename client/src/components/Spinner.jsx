import React from 'react';

const Spinner = props => {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui text loader">{props.action}</div>
        </div>
    )
}

Spinner.defaultProps = {
    action: 'Loading...'
}

export default Spinner;