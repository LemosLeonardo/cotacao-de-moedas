import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor() {
        super();
        this.state = { time: new Date().toLocaleTimeString() };

        this.onChange = (e) => {
            const state = Object.assign({}, this.state)
            const campo = e.target.name
            state[campo] = e.target.value
            this.setState(state)
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Footer">
                <p>
                    {this.state.time}
                </p>
            </div>
        )
    }
}
export default Footer