/**
 * Test page to render serialized gutenburg blocks in admin.
 */

( function( blocks, element ) {
	console.log( 'team-time-tracker-test-page loaded' );

	var testAttributes = {};
	var testBlock = blocks.createBlock( 'team-time-tracker/test', testAttributes );

	var el = element.createElement;

	element.render(
		el( 'p', {}, 'Element render test' ),
		document.getElementById( 'team-time-tracker-page' )
	);

	console.log( 'testBlock: ', testBlock );
} )(
	window.wp.blocks,
	window.wp.element,
);

