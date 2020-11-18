<?php 

add_action( "after_setup_theme", "yane_abk_setup_theme" );
function yane_abk_setup_theme()
{
    //TITLE & TAG SHOWING
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );

    
    //REGISTER POST TYPE FOR Carousel Section
    register_post_type("yane_abk_carousel", array(
        "labels" => array(
            "menu_name" => "Carousel",
            "name" => "Carousel",
            "all_items" => "All Carousel",
            "add_new" => "Add New Carousel",
            "add_new_item" => "Add New Carousel"
        ),
        "supports" => array("title","thumbnail" ),
        'public' => false,  // it's not public, it shouldn't have it's own permalink, and so on
        'publicly_queryable' => true,  // you should be able to query it
        'show_ui' => true,  // you should be able to edit it in wp-admin
        'exclude_from_search' => true,  // you should exclude it from search results
        'show_in_nav_menus' => false,  // you shouldn't be able to add it to menus
        'has_archive' => false,  // it shouldn't have archive page
        'rewrite' => false,  // it shouldn't have rewrite rules
        // 'show_in_menu' => 'my-unique-identifier',

    ));

    

}


//ENQUEUE SCRIPTS CSS & JS
add_action( 'wp_enqueue_scripts', 'yane_abk_enqueue_scripts' );
function yane_abk_enqueue_scripts()
{   
    //ENQUEUE STYLE 
    wp_enqueue_style("yane_abk_fontwosom", get_template_directory_uri() . "/inc/fontawesom-icon/css/all.min.css");
    wp_enqueue_style("yane_abk_jquery_vegas", get_template_directory_uri() . "/assets/js/vegas/jquery.vegas.css");
    wp_enqueue_style("yane_abk_jscrollpane", get_template_directory_uri() . "/assets/js/jscrollpane/jquery.jscrollpane.css");
    wp_enqueue_style("yane_abk_custom", get_template_directory_uri() . "/assets/css/styles.css");
    // wp_enqueue_style("yane_abk_styleNoJS", get_template_directory_uri() . "/inc/gellary-js/css/styleNoJS.css");
    wp_enqueue_style("yane_abk_main_css", get_template_directory_uri() . "/style.css");
   

    // //ENQUEUE SCRIPT
    wp_enqueue_script("yane_abk_jquery_min", get_template_directory_uri() . "/assets/js/jquery-1.6.2.min.js", array(), '', true);
    wp_enqueue_script("yane_abk_jquery_ui_min", get_template_directory_uri() . "/assets/js/jquery.ui.min.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_buttonuijs", get_template_directory_uri() . "/assets/js/button.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_fontwosomjs", get_template_directory_uri() . "/inc/fontawesom-icon/js/all.min.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_jquery_easing", get_template_directory_uri() . "/assets/js/jquery.easing.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_jquery_vegas", get_template_directory_uri() . "/assets/js/vegas/jquery.vegas.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_jquery_jscrollpane", get_template_directory_uri() . "/assets/js/jscrollpane/jquery.jscrollpane.min.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_buzz", get_template_directory_uri() . "/assets/js/buzz/buzz.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_gallery", get_template_directory_uri() . "/assets/js/gallery.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_clock", get_template_directory_uri() . "/assets/js/clock.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_js_cookie", get_template_directory_uri() . "/assets/js/js.cookie.min.js", array("jquery"), '', true);
    wp_enqueue_script("yane_abk_ab_customjs", get_template_directory_uri() . "/assets/js/ab.custom.js", array("jquery"), '', true);

    
}
