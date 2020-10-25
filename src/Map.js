import React, {Component} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css'

class Map extends Component {

    componentDidMount(){
        const appInfo = this.props.app
        mapbox.accessToken = 'pk.eyJ1IjoiZXJpY2F5cHAiLCJhIjoiY2tnYXo1ZDc1MGMxZzJ1a3p2M2NudTdzeSJ9.vGu2FrE0MQRo1wM5tLRxWw';
        const map = new mapbox.Map({
            container: 'map',
            style: appInfo.state.style,
            center: [ appInfo.state.longtitude, appInfo.state.latitude],
            zoom: 12,
            });
            map.addControl(new mapbox.NavigationControl());
            appInfo.setState({
                map: map,
            })
    }

    render(){
        const toggleStyle = this.props.app;
        const map = toggleStyle.state.map;
        if(map){
            //setStyle is from mapbox api
            map.setStyle(toggleStyle.state.style)
        }

        return(
            <div id="map">
            </div>
        )
    }
}

export default Map;