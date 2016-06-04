import * as React from 'react';
import {ComponentClass, StatelessComponent} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Store} from 'redux';
import { getStore } from '../store/store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const store: Store = getStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class BootstrapApp {
	private holderId: string;
	private routes: Object;
	private AppComponent: ComponentClass<any>;
	private AppInitError: ComponentClass<any> | StatelessComponent<any>;
	private ErrTemplateDefault = error => (
		<div>
			<h4>Aplication init error.</h4>
			<section>{error.message}</section>
		</div>
	);
	
	constructor(holderId: string,
		routes: Object,
		App: ComponentClass<any>,
		AppInitError?: ComponentClass<any> | StatelessComponent<any>) {

		this.holderId = holderId;
		this.routes = routes;
		this.AppComponent = App;
		this.AppInitError = AppInitError;
	}

	private renderApp() {
		render((
			<Provider store={store}>
				<Router routes={this.routes} history={history} />
			</Provider>
		), document.getElementById(this.holderId));
	};

	private renderAppError(error: Error, props?: Object) {
		render(
			Error ? React.createElement(this.AppInitError, props) : this.ErrTemplateDefault(error),
			document.getElementById(this.holderId)
		);
	}

	private prepareApp() {
		return Promise.all([() => null]);
	}

	public initApp() {
		this.prepareApp()
			.then(() => this.renderApp())
			.catch(exception => {
				console.error("exception--->", exception);
				this.renderAppError(exception);
			});
	}
}