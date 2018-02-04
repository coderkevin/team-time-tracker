import { registerBlocks as registerAdminBlocks } from './blocks';

const { __ } = wp.i18n;
const { render } = wp.element;
const { createBlockEditor } = wp.editor;
const { registerBlockType, getBlockTypes, InnerBlocks } = wp.blocks;

const adminBlocks = {};
const globalBlocks = {};

registerAdminBlocks( adminBlocks );
getBlockTypes().forEach( ( block ) => {
	globalBlocks[ block.name ] = block;
} );

// Make a registry that contains the global blocks and our own special admin blocks.
const blockRegistry = { ...globalBlocks, ...adminBlocks };

/*
registerBlockType( 'team-time-tracker/section', {
	title: __( 'Team Time Tracker: Section' ),
	icon: 'clock',
	category: 'layout',
	edit( { attributes, setAttributes, className } ) {
		const { heading } = attributes;
		return (
			<div>
				<h3>{ __( heading ) } { __( '(edit)' ) }</h3>
				<InnerBlocks />
			</div>
		);
	},
	save( { attributes } ) {
		const { heading } = attributes;
		return (
			<div>
				<h3>{ __( heading ) }</h3>
				<InnerBlocks.Content />
			</div>
		);
	},
}, blockRegistry );
*/

const attributes = { message: 'It worked!' };
const settings = {
	blockRegistry
};

wp.api.init().then( function() {
	console.log( 'creating block editor.' );
	console.log( 'blockRegistry: ', blockRegistry );

	createBlockEditor(
		'team-time-tracker-page',
		'team-time-tracker/admin-page',
		attributes,
		settings
	);
} );
