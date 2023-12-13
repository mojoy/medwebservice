<?php
/**
 * Template Name: дефотная страница
 * @package WordPress
 * @subpackage stomprice
 */

get_header(); ?>
    <section class="content">
        <div class="holder">
            <div class="heading-top">
                <?php  get_template_part('inc/breadcrumbs', 'none');?>
            </div>
            <div class="heading">
                <h1 class="title"><?php the_title(); ?></h1>
            </div>
            <?php edit_post_link('редактировать', '<p class="btn-edit">', '</p>'); ?>
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <div class="entry">
                <?php the_content(); ?>
            </div>
            <?php endwhile; endif; ?>
            <?php edit_post_link(__('редактировать.', 'kubrick'), '<p>', '</p>'); ?>
        </div>
	</section>
</div>
<?php get_footer(); ?>
