/**
 * WordPress dependencies
 */
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import AdminPage from './admin-page';
import PostList from './post-list';

const blocks = {
	'team-time-tracker/admin-page': AdminPage,
	'team-time-tracker/post-list': PostList,
};

export const registerBlocks = ( blockRegistry ) => {
	Object.keys( blocks ).forEach( ( name ) => {
		registerBlockType( name, blocks[ name ], blockRegistry );
	} );
}

export default blocks;