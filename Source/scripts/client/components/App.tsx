import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import '../../../styles/main.less';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RaisedButton } from 'material-ui';


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
				<RaisedButton label="Default" />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);