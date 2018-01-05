/**
 * Test block
 */
( function( blocks, i18n, element ) {
	console.log( 'test block loaded!' );

	var el = element.createElement;
	var __ = i18n.__;

	var blockStyle = {
		backgroundColor: '#22A',
		color: '#FFF',
		padding: '50px',
	};

	blocks.registerBlockType( 'team-time-tracker/test', {
		title: __( 'Team Time Tracker: Test', 'team-time-tracker' ),
		icon: 'clock',
		category: 'widgets',
		supportHTML: false,
		edit: function( props ) {
			console.log( 'test - edit: ', props );
			return el(
				'p',
				{ style: blockStyle },
				'Team Time Tracker - Editor Test'
			);
		},
		save: function( props ) {
			console.log( 'test - save: ', props );
			return null;
		},
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element,
);
