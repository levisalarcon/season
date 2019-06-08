import React from 'react';

class App extends React.Component{

    constructor() {
        super()
        this.state = {
            position: {},
            error: null
        }
    }
    
    componentDidMount() {
        var self = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            self.setState({
                position: { 
                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude
                }
            });
        }, function(error) {
            self.setState({error: error.message})
        });
    }


    render() {
        if(this.state.error && (!this.state.longitude || this.state.latitude)){
            return <div>Error: {this.state.error}</div>
        }
        
        if(!this.state.error && this.state.position.latitude && this.state.position.longitude){
           return this._renderPosition();
        }

        return <span>Loading...</span>
    }

    _renderPosition() {
        return (
            <div>
                <p>longitude: {this.state.position.longitude}</p>
                <p>latitude: {this.state.position.latitude}</p>
            </div>
        )
    }
           
}

export default App;