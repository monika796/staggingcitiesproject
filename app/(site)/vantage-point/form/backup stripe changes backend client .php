<?php
/*
Plugin Name: Cities Global Payments
Description: A plugin to create a custom post type for Cities Global Payments, provide REST API endpoints, and add admin settings for Stripe integration.
Version: 1.0
Author: Your Name
*/

require_once __DIR__ . '/vendor/autoload.php'; // Update the path to Stripe's library

// Register the custom post type
function cgp_register_custom_post_type() {
    $labels = array(
        'name'               => 'Stripe Payments',
        'singular_name'      => 'Stripe Payment',
        'menu_name'          => 'Stripe Payments',
        'name_admin_bar'     => 'Stripe Payment',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Payment',
        'new_item'           => 'New Payment',
        'edit_item'          => 'Edit Payment',
        'view_item'          => 'View Payment',
        'all_items'          => 'All Payments',
        'search_items'       => 'Search Payments',
        'not_found'          => 'No records found.',
        'not_found_in_trash' => 'No records in Trash.',
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'show_in_rest'       => true,
        'has_archive'        => true,
        'supports'           => array('title', 'editor', 'custom-fields'),
        'menu_icon'          => 'dashicons-admin-site',

    );

    register_post_type('stripe_payments', $args);
}
add_action('init', 'cgp_register_custom_post_type');

function cgp_add_custom_columns($columns) {
    $new_columns = array(
        'cb'          => '<input type="checkbox" />',
        'title'       => 'Payment',       
        'meta_info'   => 'User Name',
        'form_type'   => 'Form Type',
		 'content'     => 'Amount',
        'date'        => 'Date',
    );
    return $new_columns;
}
add_filter('manage_stripe_payments_posts_columns', 'cgp_add_custom_columns');


function cgp_custom_columns($column, $post_id) {
    switch ($column) {
                case 'meta_info':
            $meta_value = get_post_meta($post_id, 'payment_first_name', true).' '.get_post_meta($post_id, 'payment_last_name', true); // Replace with your meta key
            echo $meta_value;
            break;

        case 'form_type':
            $form_type = get_post_meta($post_id, 'payment_donation_frequency', true);
            if($form_type == "vantage") {
                echo "Vantage";
            }else {
                echo "Donation";
            }
            break;
			
			case 'content':
            echo get_post_meta($post_id, 'payment_donation_amount', true); // Display the excerpt as payment details
            break;
    }
}
add_action('manage_stripe_payments_posts_custom_column', 'cgp_custom_columns', 10, 2);

function cgp_register_custom_fields() {
    add_meta_box(
        'stripe_payment_details',
        'Payment Details',
        'cgp_render_payment_details_meta_box',
        'stripe_payments',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'cgp_register_custom_fields');


function cgp_render_payment_details_meta_box($post) {
    $payment_first_name = get_post_meta($post->ID, 'payment_first_name', true);
    $payment_last_name = get_post_meta($post->ID, 'payment_last_name', true);
    $payment_email = get_post_meta($post->ID, 'payment_email', true);
    $payment_phone = get_post_meta($post->ID, 'payment_phone', true);
    $payment_postal_code = get_post_meta($post->ID, 'payment_postal_code', true);
    $payment_street = get_post_meta($post->ID, 'payment_street', true);
    $payment_city = get_post_meta($post->ID, 'payment_city', true);
    $payment_state = get_post_meta($post->ID, 'payment_state', true);
    $payment_country = get_post_meta($post->ID, 'payment_country', true);
    $payment_donation_amount = get_post_meta($post->ID, 'payment_donation_amount', true);
    $payment_donation_frequency = get_post_meta($post->ID, 'payment_donation_frequency', true);
    $payment_payment_method = get_post_meta($post->ID, 'payment_payment_method', true);
    $payment_payment_method_type = get_post_meta($post->ID, 'payment_payment_method_type', true);
    ?>

    <table class="form-table">
        <tr>
            <th><label for="payment_first_name">First Name</label></th>
            <td style="text-transform:capitalize;"><?php echo esc_attr($payment_first_name); ?></td>
        </tr>
        <tr>
            <th><label for="payment_last_name">Last Name</label></th>
            <td><?php echo esc_attr($payment_last_name); ?></td>
        </tr>
        <tr>
            <th><label for="payment_email">Email</label></th>
            <td><?php echo esc_attr($payment_email); ?></td>
        </tr>
        <tr>
            <th><label for="payment_phone">Phone</label></th>
            <td><?php echo $payment_phone; ?></td>
        </tr>
        <tr>
            <th><label for="payment_postal_code">Postal Code</label></th>
            <td><?php echo esc_attr($payment_postal_code); ?></td>
        </tr>
        <tr>
            <th><label for="payment_street">Street Address</label></th>
            <td><?php echo esc_attr($payment_street); ?></td>
        </tr>
        <tr>
            <th><label for="payment_city">City</label></th>
            <td><?php echo esc_attr($payment_city); ?></td>
        </tr>
        <tr>
            <th><label for="payment_state">State</label></th>
            <td><?php echo esc_attr($payment_state); ?></td>
        </tr>
        <tr>
            <th><label for="payment_country">Country</label></th>
            <td><?php echo esc_attr($payment_country); ?></td>
        </tr>
        <tr>
            <th><label for="payment_donation_amount">Amount</label></th>
            <td><?php echo $payment_donation_amount; ?></td>
        </tr>
        <tr>
            <th><label for="payment_donation_frequency">Payment Frequency</label></th>
            <td><?php 
            if($payment_donation_frequency == "vantage"){
                echo "one-time";
            }else {
                 
						if($payment_donation_frequency == "one-time"){
                echo "One Time";
            }elseif($payment_donation_frequency == "week"){
                echo "Weekly";
            }
				elseif($payment_donation_frequency == "2week"){
                echo "Every 2 Weeks";
            }
				elseif($payment_donation_frequency == "month"){
                echo "Monthly";
            }
elseif($payment_donation_frequency == "year"){
                echo "Yearly";
            }
//echo esc_attr($payment_donation_frequency); 
            }
           ?></td>
        </tr>
        <tr>
            <th><label for="payment_payment_method">Payment Method</label></th>
            <td><?php echo esc_attr($payment_payment_method); ?></td>
        </tr>
        <tr>
            <th><label for="payment_payment_method_type">Payment Method Type</label></th>
            <td><?php echo esc_attr($payment_payment_method_type); ?></td>
        </tr>
    </table>
    <?php
}


function cgp_save_payment_details_meta_box($post_id) {
    if (array_key_exists('payment_first_name', $_POST)) {
        update_post_meta($post_id, 'payment_first_name', sanitize_text_field($_POST['payment_first_name']));
    }
    if (array_key_exists('payment_last_name', $_POST)) {
        update_post_meta($post_id, 'payment_last_name', sanitize_text_field($_POST['payment_last_name']));
    }
    if (array_key_exists('payment_email', $_POST)) {
        update_post_meta($post_id, 'payment_email', sanitize_email($_POST['payment_email']));
    }
    if (array_key_exists('payment_phone', $_POST)) {
        update_post_meta($post_id, 'payment_phone', sanitize_text_field($_POST['payment_phone']));
    }
    if (array_key_exists('payment_postal_code', $_POST)) {
        update_post_meta($post_id, 'payment_postal_code', sanitize_text_field($_POST['payment_postal_code']));
    }
    if (array_key_exists('payment_street', $_POST)) {
        update_post_meta($post_id, 'payment_street', sanitize_text_field($_POST['payment_street']));
    }
    if (array_key_exists('payment_city', $_POST)) {
        update_post_meta($post_id, 'payment_city', sanitize_text_field($_POST['payment_city']));
    }
    if (array_key_exists('payment_state', $_POST)) {
        update_post_meta($post_id, 'payment_state', sanitize_text_field($_POST['payment_state']));
    }
    if (array_key_exists('payment_country', $_POST)) {
        update_post_meta($post_id, 'payment_country', sanitize_text_field($_POST['payment_country']));
    }
    if (array_key_exists('payment_donation_amount', $_POST)) {
        update_post_meta($post_id, 'payment_donation_amount', $_POST['payment_donation_amount']);
    }
    if (array_key_exists('payment_donation_frequency', $_POST)) {
        update_post_meta($post_id, 'payment_donation_frequency', sanitize_text_field($_POST['payment_donation_frequency']));
    }
    if (array_key_exists('payment_payment_method', $_POST)) {
        update_post_meta($post_id, 'payment_payment_method', sanitize_text_field($_POST['payment_payment_method']));
    }
    if (array_key_exists('payment_payment_method_type', $_POST)) {
        update_post_meta($post_id, 'payment_payment_method_type', sanitize_text_field($_POST['payment_payment_method_type']));
    }
}
add_action('save_post', 'cgp_save_payment_details_meta_box');


// Add REST API endpoint to insert data
function cgp_register_api_endpoint_create() {
    register_rest_route('cgp/v1', '/create', array(
        'methods'  => 'POST',
        'callback' => 'cgp_create_city_payment',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'cgp_register_api_endpoint_create');

function cgp_create_city_payment(WP_REST_Request $request) {
    // Specify allowed origins
    $allowedOrigins = [
        'http://localhost:3000',
        'https://citiesprojectglobal.vercel.app'
    ];

    // Get the origin of the request
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    // Check if the origin is in the allowed list
    if (in_array($origin, $allowedOrigins)) {
        header("Access-Control-Allow-Origin: $origin");
    }

    // Set other CORS headers
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true");

    // Handle preflight (OPTIONS) requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }


    $stripe = new \Stripe\StripeClient(get_option('cgp_stripe_secret_key'));

    header('Content-Type: application/json');

    try {
        // Retrieve JSON from POST body
        $jsonObj = $request->get_json_params();

        $amount = isset($jsonObj['items'][0]['amount']) ? intval($jsonObj['items'][0]['amount'] * 100) : 0; // Convert to cents
        $frequency = $jsonObj['items'][0]['frequency'] ?? "one-time";
        $paymentMethod = $jsonObj['items'][0]['paymentMethod'] ?? "";
        $firstName = $jsonObj['customer']['firstName'] ?? "";
        $lastName = $jsonObj['customer']['lastName'] ?? "";
        $email = $jsonObj['customer']['email'] ?? "";
        $phone = $jsonObj['customer']['phone'] ?? "";
        $postalCode = $jsonObj['customer']['postalCode'] ?? "";
        $street = $jsonObj['customer']['street'] ?? "";
        $city = $jsonObj['customer']['city'] ?? "";
        $state = $jsonObj['customer']['state'] ?? "";
        $country = $jsonObj['customer']['country'] ?? "";

        if ($frequency == "vantage") {
            $paymentIntent = $stripe->paymentIntents->create([
                'amount' => $amount,
                'currency' => 'usd',
                'automatic_payment_methods' => ['enabled' => true],
                'description' => 'Payment',
                'shipping' => [
                    'name' => $firstName.' '.$lastName,
                    'address' => [
                        'line1' => $street,
                        'postal_code' => $postalCode,
                        'city' => $city,
                        'state' => $state,
                        'country' => $country,
                    ],
                ],
                'metadata' => [
                    'donation_frequency' => $frequency,
                    'donation_amount' => $amount,
                    'payment_method' => $paymentMethod,
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'phone' => $phone,
                    'postal_code' => $postalCode,
                    'street' => $street,
                    'city' => $city,
                    'state' => $state,
                    'country' => $country,
                ],
            ]);

            return new WP_REST_Response(['clientSecret' => $paymentIntent->client_secret], 200);
        } elseif ($frequency == "one-time") {
            $paymentIntent = $stripe->paymentIntents->create([
                'amount' => $amount,
                'currency' => 'usd',
                'automatic_payment_methods' => ['enabled' => true],
                'description' => 'Payment',
                'shipping' => [
                    'name' => $firstName.' '.$lastName,
                    'address' => [
                        'line1' => $street,
                        'postal_code' => $postalCode,
                        'city' => $city,
                        'state' => $state,
                        'country' => $country,
                    ],
                ],
                'metadata' => [
                    'donation_frequency' => $frequency,
                    'donation_amount' => $amount,
                    'payment_method' => $paymentMethod,
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'phone' => $phone,
                    'postal_code' => $postalCode,
                    'street' => $street,
                    'city' => $city,
                    'state' => $state,
                    'country' => $country,
                ],
            ]);

            return new WP_REST_Response(['clientSecret' => $paymentIntent->client_secret], 200);
        } else {
            $customer = $stripe->customers->create([
                'name' => $firstName.' '.$lastName,
                'email' => $email,
                'address' => [
                    'line1' => $street,
                    'postal_code' => $postalCode,
                    'city' => $city,
                    'state' => $state,
                    'country' => $country,
                ],
            ]);

            $interval = $frequency === 'month' ? 'month' : ($frequency === 'week' ? 'week' : ($frequency === '2week' ? '2 weeks' : 'year'));
            $price = "";

            if ($frequency == 'month') {
            $price = $stripe->prices->create([
              'currency' => 'usd',
              'unit_amount' => $amount,
              'recurring' => ['interval' => 'month'],
              'product_data' => ['name' => 'Donation'],
            ]);
            } else if ($frequency == 'week') {
                $price = $stripe->prices->create([
                  'currency' => 'usd',
                  'unit_amount' => $amount,
                  'recurring' => ['interval' => 'week'],
                  'product_data' => ['name' => 'Donation'],
                ]);
            } else if ($frequency == '2week') {
                $price = $stripe->prices->create([
                  'currency' => 'usd',
                  'unit_amount' => $amount,
                  'recurring' => [
                        'interval' => 'week',
                        'interval_count' => 2,
                    ],
                  'product_data' => ['name' => 'Donation'],
                ]);
            } else {
                $price = $stripe->prices->create([
                  'currency' => 'usd',
                  'unit_amount' => $amount,
                  'recurring' => ['interval' => 'year'],
                  'product_data' => ['name' => 'Donation'],
                ]);
            }

            $subscription = $stripe->subscriptions->create([
                'customer' => $customer->id,
                'items' => [['price' => $price->id]],
                'metadata' => [
                    'donation_frequency' => $frequency,
                    'donation_amount' => $amount,
                    'payment_method' => $paymentMethod,
                    'first_name' => $firstName,
                    'last_name' => $lastName,
                    'email' => $email,
                    'phone' => $phone,
                    'postal_code' => $postalCode,
                    'street' => $street,
                    'city' => $city,
                    'state' => $state,
                    'country' => $country,
                ],
                'payment_behavior' => 'default_incomplete',
                'payment_settings' => ['save_default_payment_method' => 'on_subscription'],
                'expand' => ['latest_invoice.payment_intent'],
            ]);

            return new WP_REST_Response([
                'subscriptionId' => $subscription->id,
                'clientSecret' => $subscription->latest_invoice->payment_intent->client_secret,
            ], 200);
        }
    } catch (Error $e) {
        return new WP_REST_Response(['error' => $e->getMessage()], 500);
    }
}


// Add REST API endpoint to insert data
function cgp_register_api_endpoint() {
    register_rest_route('cgp/v1', '/insert', array(
        'methods'  => 'POST',
        'callback' => 'cgp_insert_city_payment',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'cgp_register_api_endpoint');

function cgp_insert_city_payment(WP_REST_Request $request) {
    // Stripe secret for verifying webhooks (saved in settings)
    $endpoint_secret = get_option('cgp_webhook_secret');

    // Get the raw payload from the request
    $payload = file_get_contents('php://input');
    $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];

    $stripe = new \Stripe\StripeClient(get_option('cgp_stripe_secret_key'));
    // Verify the webhook signature
    try {
        \Stripe\Stripe::setApiKey(get_option('cgp_stripe_secret_key'));
        $event = \Stripe\Webhook::constructEvent($payload, $sig_header, $endpoint_secret);
    } catch (\Stripe\Exception\SignatureVerificationException $e) {
        return new WP_Error('invalid_signature', 'Invalid webhook signature', array('status' => 400));
    } catch (\Stripe\Exception\UnexpectedValueException $e) {
        return new WP_Error('invalid_payload', 'Invalid webhook payload', array('status' => 400));
    }

    // Process specific event types
    switch ($event->type) {
        case 'payment_intent.succeeded':
            $paymentIntent = $event->data->object;
            $metadata = $paymentIntent->metadata;
            $donation_frequency = $metadata->donation_frequency;
            if (!empty($donation_frequency)) {
                $first_name = $metadata->first_name;
                $last_name = $metadata->last_name;
                $email = $metadata->email;
                $phone = $metadata->phone;
                $postal_code = $metadata->postal_code;
                $street = $metadata->street;
                $city = $metadata->city;
                $state = $metadata->state;
                $country = $metadata->country;
                $donation_amount = "$".number_format(($metadata->donation_amount)/ 100, 2);
                $payment_method = $metadata->payment_method;
                $paymentMethodId = $paymentIntent->payment_method;
                $paymentMethod = $stripe->paymentMethods->retrieve($paymentMethodId);
                $payment_method_type = $paymentMethod->type;
                $full_name = $first_name." ".$last_name;

            $to = 'gurpreetiws123@gmail.com';
            $subject = 'Email subject';
            $body = 'Email body content';

            $attachments =$metadata->pdf ?? [];
           $headers = array(
                        'Content-Type: text/html; charset=UTF-8'
                    );

                    // Send email
                    wp_mail( $to, $subject, $body, $headers, $attachments );


            // print_r($paymentIntent);
            // Extract necessary data
            $title = 'Payment Succeeded for ' . $paymentIntent->id;
            $content = 'Amount: $' . number_format(($paymentIntent->amount_received)/ 100, 2);
            $meta = array(
                'payment_first_name' => $first_name,
                'payment_last_name' => $last_name,
                'payment_email' => $email,
                'payment_phone' => $phone,
                'payment_postal_code' => $postal_code,
                'payment_street' => $street,
                'payment_city' => $city,
                'payment_state' => $state,
                'payment_country' => $country,
                'payment_donation_amount' => $donation_amount,
                'payment_donation_frequency' => $donation_frequency,
                'payment_payment_method' => $payment_method,
                'payment_payment_method_type' => $payment_method_type

            );

            // Insert a new custom post
            $new_post = array(
                'post_title'   => $title,
                'post_content' => $content,
                'post_status'  => 'publish',
                'post_type'    => 'stripe_payments',
                'meta_input'   => $meta,
            );

            $post_id = wp_insert_post($new_post);

            $user = get_user_by('email', $email);
            if (!$user) {
                $userdata = array(
                'user_login'    => sanitize_user($email),
                'user_pass'     => wp_generate_password(),
                'user_email'    => $email,
                'first_name'    => $first_name,
                'last_name'     => $last_name,
                'role'          => 'subscriber',  // Assign a role, or customize as needed
            );
                $user_id = wp_insert_user($userdata);
            }


            if (is_wp_error($post_id)) {
                return $post_id;
            }
            }
            break;

        case 'invoice.payment_succeeded':
            $paymentIntent = $event->data->object;
            $lineItem = $paymentIntent->lines->data[0];
            $metadata = $lineItem->metadata;
            $donation_frequency = $metadata->donation_frequency;
            if (!empty($donation_frequency)) {
                $first_name = $metadata->first_name;
                $last_name = $metadata->last_name;
                $email = $metadata->email;
                $phone = $metadata->phone;
                $postal_code = $metadata->postal_code;
                $street = $metadata->street;
                $city = $metadata->city;
                $state = $metadata->state;
                $country = $metadata->country;
                $donation_amount = "$".number_format(($metadata->donation_amount)/ 100, 2);
                $payment_method = $metadata->payment_method;
                $paymentMethodId = $paymentIntent->payment_method;
                $payment_method_type = 'Stripe Recurring';
                $full_name = $first_name." ".$last_name;           

				
				 $to = 'gurpreetiws123@gmail.com';
            $subject = 'Email subject';
            $body = 'Email body content';

            $attachments =$metadata->pdf ?? [];
           $headers = array(
                        'Content-Type: text/html; charset=UTF-8'
                    );

                    // Send email
                    wp_mail( $to, $subject, $body, $headers, $attachments );

            // print_r($paymentIntent);
            // Extract necessary data
            $title = 'Payment Succeeded for ' . $paymentIntent->id;
            $content = 'Amount: $' . number_format(($paymentIntent->amount_paid)/ 100, 2);
            $meta = array(
                'payment_first_name' => $first_name,
                'payment_last_name' => $last_name,
                'payment_email' => $email,
                'payment_phone' => $phone,
                'payment_postal_code' => $postal_code,
                'payment_street' => $street,
                'payment_city' => $city,
                'payment_state' => $state,
                'payment_country' => $country,
                'payment_donation_amount' => $donation_amount,
                'payment_donation_frequency' => $donation_frequency,
                'payment_payment_method' => $payment_method,
                'payment_payment_method_type' => $payment_method_type

            );

            // Insert a new custom post
            $new_post = array(
                'post_title'   => $title,
                'post_content' => $content,
                'post_status'  => 'publish',
                'post_type'    => 'stripe_payments',
                'meta_input'   => $meta,
            );

            $post_id = wp_insert_post($new_post);

            $user = get_user_by('email', $email);
            if (!$user) {
                $userdata = array(
                'user_login'    => sanitize_user($email),
                'user_pass'     => wp_generate_password(),
                'user_email'    => $email,
                'first_name'    => $first_name,
                'last_name'     => $last_name,
                'role'          => 'subscriber',  // Assign a role, or customize as needed
            );
                $user_id = wp_insert_user($userdata);
            }

            if (is_wp_error($post_id)) {
                return $post_id;
            }
            }
            break;
        default:
            return rest_ensure_response(array('status' => 'unhandled_event', 'event_type' => $event->type));
    }

    return rest_ensure_response(array('success' => true, 'message' => 'Webhook processed'));
}


// Add admin menu for settings
function cgp_add_admin_menu() {
    add_menu_page(
        'CGP Settings',
        'CGP Settings',
        'manage_options',
        'cgp-settings',
        'cgp_render_settings_page',
        'dashicons-admin-generic',
        100
    );
}
add_action('admin_menu', 'cgp_add_admin_menu');

// Render the settings page
function cgp_render_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    if (isset($_POST['cgp_save_settings'])) {
        check_admin_referer('cgp_settings');

        $stripe_secret_key = sanitize_text_field($_POST['stripe_secret_key']);
        $webhook_secret = sanitize_text_field($_POST['webhook_secret']);

        update_option('cgp_stripe_secret_key', $stripe_secret_key);
        update_option('cgp_webhook_secret', $webhook_secret);

        echo '<div class="updated"><p>Settings saved successfully.</p></div>';
    }

    $stripe_secret_key = get_option('cgp_stripe_secret_key', '');
    $webhook_secret = get_option('cgp_webhook_secret', '');

    ?>
    <div class="wrap">
        <h1>CGP Settings</h1>
        <form method="post">
            <?php wp_nonce_field('cgp_settings'); ?>
            <table class="form-table">
                <tr>
                    <th scope="row">
                        <label for="stripe_secret_key">Stripe Secret Key</label>
                    </th>
                    <td>
                        <input type="text" name="stripe_secret_key" id="stripe_secret_key" value="<?php echo esc_attr($stripe_secret_key); ?>" class="regular-text">
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="webhook_secret">Webhook Secret</label>
                    </th>
                    <td>
                        <input type="text" name="webhook_secret" id="webhook_secret" value="<?php echo esc_attr($webhook_secret); ?>" class="regular-text">
                    </td>
                </tr>
            </table>
            <?php submit_button('Save Settings', 'primary', 'cgp_save_settings'); ?>
        </form>
    </div>
    <?php
}


function custom_admin_css() {
    echo '<style>
.wp-admin td.colspanchange {
    text-align: center;
}

#menu-posts-stripe_payments ul li:nth-last-child(1) {
    display: none;
}

.wp-heading-inline + a.page-title-action {
    display: none !important;
}

div#postdivrich {
    display: none;
}

input#title {
    pointer-events: none;
}
</style>';
}

// Hook into the admin_head action to inject CSS into the admin dashboard
add_action('admin_head', 'custom_admin_css');