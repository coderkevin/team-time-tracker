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
		/*
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
		 */

		require_once( plugin_dir_path( __FILE__ ) . '../../gutenberg/gutenberg.php' );
		gutenberg_enqueue_editor();
		require_once( ABSPATH . 'wp-admin/admin-header.php' );


		// Localize the wp-api settings and schema.
		$schema_response = rest_do_request( new WP_REST_Request( 'GET', '/' ) );
		if ( ! $schema_response->is_error() ) {
			wp_add_inline_script( 'wp-api', sprintf(
				'wpApiSettings.cacheSchema = true; wpApiSettings.schema = %s;',
				wp_json_encode( $schema_response->get_data() )
			), 'before' );
		}

		wp_enqueue_script(
			'team-time-tracker-admin',
			plugins_url( 'team-time-tracker-admin.bundle.js', __FILE__ ),
			array( 'wp-blocks', 'wp-editor' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'team-time-tracker-admin.bundle.js' )
		);

		wp_enqueue_style( 'wp-components' );
		wp_enqueue_style( 'wp-blocks' );
		wp_enqueue_style( 'wp-edit-blocks' );

		echo( '<div class="wrap">' );
		echo( '  <h3>Team Time Tracker</h3>' );
		echo( '  <div id="team-time-tracker-page"></div>' );
		echo( '</div>' );
	}
}

/*
function register_book_type() {
	$args = array(
		'public' => true,
		'label' => 'Books',
		'show_in_rest' => true,
		'template' => array(
			array( 'core/image' ),
			array( 'core/paragraph', array(
				'placeholder' => 'Add a book description',
			) ),
			array( 'core/quote' ),
		),
		'template_lock' => 'all',
	);
	register_post_type( 'book', $args );
}
add_action( 'init', 'register_book_type' );
*/

