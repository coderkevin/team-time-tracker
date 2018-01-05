
/**
 * WordPress Dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { render } = wp.element;
const { createEditorInstance } = wp.editor;

const colors = [
		'#f78da7',
		'#cf2e2e',
		'#ff6900',
		'#fcb900',
		'#7bdcb5',
		'#00d084',
		'#8ed1fc',
		'#0693e3',
		'#eee',
		'#abb8c3',
		'#313131',
];

const blockTypes = true;

const editorSettings = {
	wideImages: true,
	colors,
	blockTypes,
	titlePlaceholder: __( 'Add title' ),
};

const dummyPost = {
	author: 1,
	categories: [1],
	comment_status: 'open',
	content: {
		raw: '<!-- wp:core/image {"id":6} -->↵<figure class="wp-block-image"><img src="http://localhost/wp-content/uploads/2017/11/nes-bottom.jpeg" /></figure>↵<!-- /wp:core/image -->↵↵<!-- wp:core/latest-posts {"displayPostDate":true,"layout":"grid"} /-->↵↵<!-- wp:team-time-tracker/test {"className":"xx"} /-->',
		rendered: '↵<figure class="wp-block-image"><img src="http://localhost/wp-content/uploads/2017/11/nes-bottom.jpeg" /></figure>↵↵↵<ul class="wp-block-latest-posts aligncenter is-grid columns-3"><li><a href="http://localhost/?p=25">test 2</a><time datetime="2017-12-12T07:07:44+00:00" class="wp-block-latest-posts__post-date">December 12, 2017</time></li>↵<li><a href="http://localhost/?p=4">Test Gutenberg Post</a><time datetime="2017-11-06T05:13:02+00:00" class="wp-block-latest-posts__post-date">November 6, 2017</time></li>↵<li><a href="http://localhost/?p=1">Hello world!</a><time datetime="2017-08-27T21:01:16+00:00" class="wp-block-latest-posts__post-date">August 27, 2017</time></li>↵</ul>↵↵',
		protected: false
	},
	date: '2017-11-06T05:13:02',
	date_gmt: '2017-11-06T05:13:02',
	excerpt: {
		raw: '',
		rendered: '<p>test 2December 12, 2017 Test Gutenberg PostNovember 6, 2017 Hello world!August 27, 2017</p>↵',
		protected: false
	},
	featured_media: 0,
	format: 'standard',
	guid: {
		rendered: 'http://localhost/?p=4',
		raw: 'http://localhost/?p=4'
	},
	id: 4,
	link: 'http://localhost/?p=4',
	meta: [],
	modified: '2017-12-12T07:32:21',
	modified_gmt: '2017-12-12T07:32:21',
	password: '',
	ping_status: 'open',
	revisions: {count: 14, last_id: 24},
	slug: 'test-gutenberg-post',
	status: 'publish',
	sticky: false,
	tags: [],
	template: '',
	title: {
		raw: 'Test Gutenberg Post',
		rendered: 'Test Gutenberg Post'
	},
	type: 'post',
};

wp.api.init().then( () => {
	createEditorInstance( 'team-time-tracker-page', dummyPost, editorSettings );
} );

/**
 * Internal Dependencies
 */
//import AdminProvider from './admin-provider';

/*
const blockStyle = {
	backgroundColor: '#088',
	color: '#fff',
	padding: '20px',
};

registerBlockType( 'team-time-tracker/admin-test-esnext', {
	title: __( 'Team Time Tracker: Test (esnext)' ),
	icon: 'clock',
	category: 'widgets',
	edit() {
		return <div style={ blockStyle }>ESNext Example! (editor)</div>;
	},
	save() {
		return null;
	}
} );
*/

/*
render(
	<AdminProvider />,
	document.getElementById( 'team-time-tracker-page' )
);
*/
