import React from "react";

class Detail extends React.Component {
	componentDidMount() {
		// default Props put by React-router
		const { location, history } = this.props;
		if(location.state === undefined) {
			history.push("/");   // go back home
		}
	}
	render() {
		const { location } = this.props;
		if(location.state) {
			return <span>{location.state.title}</span>
		} 
		else {
			return null;
		}
	}
}

export default Detail;