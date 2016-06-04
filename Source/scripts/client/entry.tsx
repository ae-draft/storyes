import App from './components/App';
import {AppError} from './components/stateless/stateless-components';
import BootstrapApp from './bootstrap/bootstrap';
import { routes } from './bootstrap/routes';
const render_holder = 'content';

new BootstrapApp(render_holder, routes, App, AppError).initApp();
