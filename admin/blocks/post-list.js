/**
 * WordPress dependencies
 */
const { withAPIData } = wp.components;
const { __ } = wp.i18n;

function renderPostRow( post ) {
	return (
		<div>
			<span>{ post.title.rendered }</span>
		</div>
	);
}

function PostListEdit( { posts } ) {
	console.log( 'posts: ', posts );

	const { data, isLoading } = posts;
	const postRows = data && data.map( renderPostRow );

	return (
		<div>
			<h4>Post List</h4>
			{ isLoading ? <span>Loading...</span> : postRows }
		</div>
	);
}

const PostListEditWithAPI = withAPIData( ( props ) => ( {
	posts: `/wp/v2/posts`
} ) )( PostListEdit );

function edit() {
	return <PostListEditWithAPI />;
}

function save() {
	return <span>Post List (save)</span>;
}

export default {
	title: __( 'Team Time Tracker: Post List' ),
	icon: 'clock',
	category: 'widgets',
	edit,
	save,
};
