import React from 'react'
import ReactDOM from 'react-dom'

class Bomb extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			secondsLeft: props.initialCount
		}
	}

	render() {
		let timeUp
		if (this.state.secondsLeft === 0) {
			timeUp = true
		} else {
			timeUp = false
		}

		return (
			<div>
				{timeUp ? (
					'Boom!'
				) : (
					`${this.state.secondsLeft} seconds left before I go boom!`
				)}
			</div>
		)
	}
}

export default Bomb