import React from 'react';
import DisplaySeason from './components/DisplaySeason';
import Spinner from './components/Spinner';

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
       return this._renderMainContent()
    }

    _renderMainContent() {
        if(this.state.error && (!this.state.longitude || this.state.latitude)){
            return <div>Error: {this.state.error}</div>
        }
        
        if(!this.state.error && this.state.position.latitude && this.state.position.longitude){
           return  <DisplaySeason latitude={this.state.position.latitude} />
        }

        return <Spinner action="waiting for permissions..." />
    }
           
}

export default App;