import '../../../styles/main.less';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar';

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({
	
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<any, any> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme() }>
				<div>
					<Navbar />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

//export default connect(mapStateToProps, mapDispatchToProps)(App);