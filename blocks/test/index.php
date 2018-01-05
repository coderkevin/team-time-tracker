<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'team_time_tracker_block_test' );

function team_time_tracker_block_test() {
	error_log( 'enqueued: team-time-tracker-block-test' );
	wp_enqueue_script(
		'team-time-tracker-block-test',
		plugins_url( 'block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.js' )
	);
}

