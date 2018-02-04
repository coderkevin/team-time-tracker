/**
 * External dependencies
 */
import React from 'react';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import PostListBlock from '../post-list';

class AdminPage extends React.Component {
	render() {
		return (
			<div>
				<h3>{ __( 'Team Time Tracker - Admin' ) }</h3>
				<PostListBlock.edit />
			</div>
		);
	}
}

function edit() {
	return <AdminPage />;
}

function save() {
	return <span>Admin Page (save)</span>;
};

export default {
	title: __( 'Team Time Tracker: Admin Page' ),
	icon: 'clock',
	category: 'widgets',
	edit,
	save,
};