import React, {Component} from 'react';
import './Search.css'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            isLoading: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        const accessToken = 'pk.eyJ1IjoiZXJpY2F5cHAiLCJhIjoiY2tnYXo1ZDc1MGMxZzJ1a3p2M2NudTdzeSJ9.vGu2FrE0MQRo1wM5tLRxWw'
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const oldPlaces = this.props.app.state.places
                const firstResult = data.features[0]
                oldPlaces.push({
                    name: this.state.value,
                    longtitude: firstResult.center[0],
                    latitude: firstResult.center[1],
                })
                this.props.app.setState({
                    places: oldPlaces
                })
                this.setState({
                    value: ""
                })
            })
    }



    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value} onChange={this.handleChange} placeholder="Add place..."/>
            </form>
        )
    }
}
export default Search