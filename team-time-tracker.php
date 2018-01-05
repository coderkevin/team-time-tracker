<?php
/**
 * @package TeamTimeTracker
 */
/*
Plugin Name: Team Time Tracker
Plugin URI: https://github.com/coderkevin/team-time-tracker
Description: Team Time Tracker, designed to keep track of the time each user has contrinbuted to team tasks.
Version: 0.0.1
Author: Kevin Killingsworth
Author URI: https://coderkevin.com
License: GPLv3
Text Domain: teamtimetracker
*/

/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

Copyright (C) 2017 Kevin Killingsworth
*/

defined( 'ABSPATH' ) || exit;

define( 'TEAM_TIME_TRACKER', '0.0.1' );
define( 'TEAM_TIME_TRACKER__PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

include 'blocks/test/index.php';

require_once( TEAM_TIME_TRACKER__PLUGIN_DIR . 'admin/class.team-time-tracker.php' );
add_action( 'init', array( 'TeamTimeTracker', 'init' ) );

if ( is_admin() ) {
	require_once( TEAM_TIME_TRACKER__PLUGIN_DIR . 'admin/class.team-time-tracker-admin.php' );
	add_action( 'init', array( 'TeamTimeTrackerAdmin', 'init' ) );
}

