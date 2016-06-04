import * as React from 'react';
import { RaisedButton, Drawer, MenuItem } from 'material-ui';

export default class Navbar extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

handleToggle = () => this.setState({ open: !this.state.open });

	handleClose = () => this.setState({ open: false });

	render() {
		return (
			<div>
				<RaisedButton
					label="Open Drawer"
					onTouchTap={this.handleToggle}
					/>
				<Drawer
					docked={false}
					width={200}
					open={this.state.open}
					onRequestChange={(open) => this.setState({ open }) }
					>
					<MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
					<MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
				</Drawer>
			</div>
		);
	}
}