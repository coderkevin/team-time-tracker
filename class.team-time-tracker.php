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
		echo( '<div class="wrap">' );
		echo( '<h1 class="wp-heading-inline">Team Time Tracker</h1>' );
		echo( '<p>Hello, this is the Team Time Tracker Administrative page.</p>' );
		echo( '</div>' );
	}
}

