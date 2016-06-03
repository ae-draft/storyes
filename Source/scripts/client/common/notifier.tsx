import * as React from 'react';
import * as NotificationSystem from 'react-notification-system';


export class Notifier extends React.Component<any, any> {
	private _notificationSystem: NotificationSystem.System;
	private defaultSettings: NotificationSystem.Notification = {
		title: "",
		message: "",
		level: "info",
		position: "tr",
		autoDismiss: 5,
		dismissible: true,
		action: null,
		onAdd: null,
		onRemove: null,
		uid: null
	};

	refs: {
		[key: string]: (Element);
		notificationSystem: any;
	}

	constructor(props, context) {
		super(props, context);
		this.state = {
			options: { allowHTML: true }
		};
	}

	componentDidMount() {
		this._notificationSystem = this.refs.notificationSystem;
	}

	static childContextTypes = {
		addError: React.PropTypes.any,
		addWarning: React.PropTypes.any,
		addSuccess: React.PropTypes.any,
		addInfo: React.PropTypes.any,
		_setOptions: React.PropTypes.any,
	}

	getChildContext() {
		return {
			addError: this.addError.bind(this),
			addWarning: this.addError.bind(this),
			addSuccess: this.addError.bind(this),
			addInfo: this.addError.bind(this),
			_setOptions: this._setOptions.bind(this)
		}
	}

	private addNotification(options: NotificationSystem.Notification = this.defaultSettings): any {
		let param = Object.assign({}, this.defaultSettings, options);
		this._notificationSystem.addNotification(param);
	}
	
	addError(err?: string | Error, options?: NotificationSystem.Notification) {
		let param = Object.assign({}, options, {level: "error", title: "Ошибка", autoDismiss: 10});
		
		if (typeof err === 'string')
			this.addNotification(Object.assign({}, param, {message: err}));

		if (err instanceof Error)
			this.addNotification(Object.assign({}, param, {message: err.message}));
	}

	addWarning(message?: string, options?: NotificationSystem.Notification) { 
		let param = Object.assign({}, options, { message }, {level: "warning"});
		this.addNotification(param);
	}

	addSuccess(message?: string, options?: NotificationSystem.Notification) {
		let param = Object.assign({}, options, { message }, {level: "success"});
		this.addNotification(param);
	}

	addInfo(message?: string, options?: NotificationSystem.Notification) {
		let param = Object.assign({}, options, { message }, {level: "info"});
		this.addNotification(param);
	}
	
	_setOptions(options: { allowHTML: boolean }) {
		this.setState({ options });
	}

	render() {
		return (
			<div>
				{this.props.children}
				<NotificationSystem ref="notificationSystem" {...this.state.options} />
			</div>
		);
	}
}

export var ImplementNotifier = (options?: { allowHTML: boolean }) => (ComposedComponent: any) =>
	class extends React.Component<any, any> {
		context: any;

		static contextTypes = {
			addError: React.PropTypes.any,
			addWarning: React.PropTypes.any,
			addSuccess: React.PropTypes.any,
			addInfo: React.PropTypes.any,
			_setOptions: React.PropTypes.any
		}

		constructor(props, context) {
			super(props, context);
			Object.assign(this, props, context);
		}

		componentWillMount() {
			if (options) {
				this.context._setOptions(options);
			}
		}

		render() {
			return <ComposedComponent {...this.props} {...this.state} {...this.context} />;
		}
	};