const { __ } = wp.i18n;
const { render } = wp.element;

const testHTML = (
	<h3>{ __( 'Testing...' ) }</h3>
);

render(
	testHTML,
	document.getElementById( 'team-time-tracker-page' )
);