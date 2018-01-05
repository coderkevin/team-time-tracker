/**
 * External dependencies
 */
import { Provider as ReduxProvider } from 'react-redux';

/**
 * WordPress Dependencies
 */
const { Component } = wp.element;

/**
 * Internal Dependencies
 */
import createReduxStore from './store';

class AdminProvider extends Component {
	constructor( props ) {
		super( ...arguments );

		this.store = createReduxStore( props.initialState );
	}

	render() {
		const { children } = this.props;
		const providers = [
			// Redux provider:
			//
			// - context.store
			[
				ReduxProvider,
				{ store: this.store },
			],
		];

		return (
			<div>
				<h3>AdminProvider</h3>
			</div>
		);
	}
};

export default AdminProvider;

