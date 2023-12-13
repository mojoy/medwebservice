<?php
/**
 * Template Name: одна запись
 * @package WordPress
 * @subpackage
 */
get_header();
?>
    <section class="content">
        <div class="holder">
            <div class="heading-top">
                <?php  get_template_part('inc/breadcrumbs', 'none');?>
            </div>
            <?php edit_post_link('редактировать', '<p class="btn-edit">', '</p>'); ?>
            <h1><?php the_title(); ?></h1>

	        <?php echo get_the_post_thumbnail( $id, 'thumbnail', array('class' => 'alignleft') ); ?>



			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <?php the_content('<p class="serif">' . __('Read the rest of this page &raquo;', 'kubrick') . '</p>'); ?>
                <?php wp_link_pages(array('before' => '<p><strong>' . __('Pages:', 'kubrick') . '</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
            <?php endwhile; endif; ?>

            <?php edit_post_link('редактировать', '<p class="btn-edit">', '</p>'); ?>
        </div>
    </section>
</div>
<?php get_footer(); ?>