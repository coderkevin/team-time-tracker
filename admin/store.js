/**
 * External dependencies
 */
import { createStore } from 'redux';
import { flowRight } from 'lodash';
import reducer from './reducer';

function createReduxStore( preloadedState ) {
	const enhancers = [
	];

	if ( window.__REDUX_DEVTOOLS_EXTENSION__ ) {
		enhancers.push( window.__REDUX_DEVTOOLS_EXTENSION__() );
	}

	const store = createStore( reducer, preloadedState, flowRight( enhancers ) );
	return store;
}

export default createReduxStore;

