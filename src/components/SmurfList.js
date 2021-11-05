import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfList = (props) => {
	
	// const testSmurf = {
	// 	id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
	// 	name: 'Papa Smurf',
	// 	position: 'Village Leader',
	// 	nickname: 'Papa',
	// 	description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
	// }

	if (props.loading) {
		return <h1>Loading...</h1>;
	}

	return (
	<div className="listContainer">
		{props.smurfList.map((smurf, index) => {
				return <Smurf key={index} smurf={smurf} />
			})}
	</div>
	);
}

const mapStateToProps = state => {
	return ({
		smurfList: state.smurfList,
		loading: state.loading
	})
}

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.