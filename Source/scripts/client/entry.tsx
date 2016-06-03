import App from './components/App';
import {AppError} from './components/stateless/stateless-components';
import {initApp, renderApp} from './bootstrap/bootstrap';

initApp()
	.then(() => renderApp(App))
	.catch(exception => {
		console.error("exception--->", exception);
		renderApp(AppError);
	});
