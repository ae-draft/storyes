import App from '../components/App';
import IndexPage from '../components/Pages/index';

export const routes = {
	path: '/Public/',
	component: App,
	indexRoute: { component: IndexPage },
	childRoutes: []
}