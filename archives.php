<?php
/**
 * @package WordPress
 * @subpackage stomprice
 */
/*
Template Name: Archives
*/
?>
<?php get_header(); ?>
<div id="content" class="widecolumn">
<div class="heading-top">
    <?php  get_template_part('inc/breadcrumbs', 'none');?>
</div>
<?php get_search_form(); ?>
    <h2><?php _e('Архив за месяц:', 'kubrick'); ?></h2>
	<ul>
		<?php wp_get_archives('type=monthly'); ?>
	</ul>
    <h2><?php _e('Архивы по теме:', 'kubrick'); ?></h2>
	<ul>
		 <?php wp_list_categories(); ?>
	</ul>
</div>
<?php get_footer(); ?>