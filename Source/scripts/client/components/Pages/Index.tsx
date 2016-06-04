import * as React from 'react';
import { RaisedButton } from 'material-ui';

export default class IndexPage extends React.Component<any, any> {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Это начальная страничка!
				<RaisedButton label="Default" />
			</div>
		);
	}
}