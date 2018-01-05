
( function( blocks, i18n, element ) {
	console.log( 'admin-blocks loaded!' );

	var el = element.createElement;
	var __ = i18n.__;

	var testStyle = {
		backgroundColor: '#2A2',
		color: '#FFF',
		padding: '50px',
	};

	blocks.registerBlockType( 'team-time-tracker/test', {
		title: __( 'Team Time Tracker: Test', 'team-time-tracker' ),
		icon: 'clock',
		category: 'widgets',
		supportHTML: false,
		edit: function( props ) {
			return el(
				'p',
				{ style: testStyle },
				'Team Time Tracker - Admin Title Test'
			);
		},
		save: () => null,
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element,
);
