<?php
/**
 * Template Name: header
 *
 *
 * @package WordPress
 * @subpackage med
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php wp_title('&laquo;', true, 'right'); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <!-- Favicons ans social images -->
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri(); ?>/favicon/favicon-16x16.png">
    <link rel="manifest" href="http://medwebservice.ru/">
    <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/favicon/safari-pinned-tab.svg" color="#ffffff">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">
    <meta name="application-name" content="<?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?>"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css"/>

    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.10.1.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery-ui.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fancybox.min.js"></script>

    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/fm.revealator.jquery.css">
    <script src="<?php echo get_template_directory_uri(); ?>/js/fm.revealator.jquery.js"></script>


    <script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

    <?php wp_head(); ?>
</head>
<body <?php body_class($class); ?>>
<div class="wrapper">
<header class="header">
    <div class="holder">
        <strong class="logo revealator-zoomin"><a href="/" title="<?php bloginfo('name')?>">MedWEBservice - <?php bloginfo('name')?></a></strong>
        <div class="contact-top revealator-zoomin">
            <a href="tel:+74957837642" class="link-phone">+7 (495) 783-76-42</a>
        </div>
        <span class="ar-7 revealator-zoomin revealator-delay1"></span>
        <span class="ar-6 revealator-zoomin revealator-delay1"></span>
    </div>
</header>