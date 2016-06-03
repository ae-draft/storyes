import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let mapStateToProps = state => state;

let mapDispatchToProps = dispatch => ({
	
});

class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Хуй!
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);