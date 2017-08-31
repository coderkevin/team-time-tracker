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

	public function admin_page() {
		wp_enqueue_style(
			'team-time-tracker-css',
			plugin_dir_url( __FILE__ ) . 'admin/dist/static/css/app.css',
			array(),
			'1', // TODO: Generate an updated version for dev
			true
		);

		wp_enqueue_script(
			'team-time-tracker-manifest',
			plugin_dir_url( __FILE__ ) . 'admin/dist/static/js/manifest.js',
			array(),
			'1', // TODO: Generate an updated version for dev
			true
		);
		wp_enqueue_script(
			'team-time-tracker-vendor',
			plugin_dir_url( __FILE__ ) . 'admin/dist/static/js/vendor.js',
			array(),
			'1', // TODO: Generate an updated version for dev
			true
		);
		wp_enqueue_script(
			'team-time-tracker-app',
			plugin_dir_url( __FILE__ ) . 'admin/dist/static/js/app.js',
			array(),
			'1', // TODO: Generate an updated version for dev
			true
		);

		echo( '<div class="wrap">' );
		echo( '  <div id="app"></div>' );
		echo( '</div>' );
	}
}

