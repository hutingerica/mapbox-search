import React, {Component} from 'react'
import mapbox from 'mapbox-gl';
// import './PlaceItem.css'

class PlaceItem extends Component {
    goTo(){
        const panelApp = this.props.app
        const map = panelApp.state.map
        const place = this.props.place
        map.flyTo({
            center: [place.longtitude, place.latitude],
            zoom: 12,
            curve: 1,
            });
    }
    render(){
        const panelApp = this.props.app
        const map = panelApp.state.map
        const place = this.props.place

        if(map){
            const marker = new mapbox.Marker({
                color: "#2727e6"
            })
            marker.setLngLat([place.longtitude, place.latitude])
            marker.setPopup(new mapbox.Popup({closeButton: false}).setHTML(place.name))
            marker.addTo(map);
        }
        return(
            <div id="place-item" onClick={() => this.goTo()}>
                {place.name}
            </div>
        )
    }
}
export default PlaceItem