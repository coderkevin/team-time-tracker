<?php

class TeamTimeTracker {
	private static $instance;

	public static function init() {
		error_log( 'TeamTimeTracker: init' );

		$instance = new TeamTimeTracker();
		$instance->install_hooks();
	}

	public function install_hooks() {
		add_action( 'admin_menu', array( $this, 'attach_menu' ) );
	}

	public function attach_menu() {
		add_menu_page(
			__( 'Team Time Tracker', 'team-time-tracker' ),
			__( 'Team Time Tracker', 'team-time-tracker' ),
			'administrator',
			'team_time_tracker',
			array( $this, 'admin_page' ),
			'dashicons-clock',
			56
		);
	}

	public function admin_page( $hook ) {
		require_once( ABSPATH . 'wp-admin/admin-header.php' );
		/*
		wp_enqueue_style(
			'team-time-tracker-css',
			plugin_dir_url( __FILE__ ) . 'admin/dist/static/css/app.css',
			array(),
			'1', // TODO: Generate an updated version for dev
			true
		);
		*/

		gutenberg_editor_prepare_scripts_and_styles();

		wp_enqueue_script(
			'team-time-tracker-admin',
			plugin_dir_url( __FILE__ ) . 'admin/team-time-tracker-admin.bundle.js',
			array( 'wp-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'admin/team-time-tracker-admin.bundle.js' )
		);

		wp_enqueue_style( 'wp-components' );
		wp_enqueue_style( 'wp-blocks' );
		wp_enqueue_style( 'wp-edit_blocks' );

		echo( '<div class="wrap">' );
		echo( '  <div id="team-time-tracker-page"></div>' );
		echo( '</div>' );
	}
}

