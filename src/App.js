import React, {Component} from 'react';
import Map from './Map';
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        map: null,
        latitude: 51.454514,
        longtitude: -2.587910,
        style: 'mapbox://styles/mapbox/navigation-preview-day-v4',
        places: []
    }
  };
  render() {
    return (
      <div className="App">
        <Map app={this} />
        <Toggler app={this} />
        <Search app={this} />
        <PlacesPanel app={this} />
      </div>
    );
  }
}

export default App;
