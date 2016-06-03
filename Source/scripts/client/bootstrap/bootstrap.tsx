import * as React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Store} from 'redux';
import { getStore } from '../store/store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const STORED_STATE_KEY: string = 'REQUESTS_STATE_KEY';
const subscriberName: string = "requests";

const render_holder = 'content';
const store: Store = getStore();

export const renderApp = (initElement, props = null, holderId = render_holder) => {
	render((
		<Provider store={store}>
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				{React.createElement(initElement, props) }
			</MuiThemeProvider>
		</Provider>
	), document.getElementById(holderId));
};

export function initApp() {
	return Promise.all([() => null]);
}