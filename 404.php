<?php
/**
 * Template Name: Главная
 *
 * @package WordPress
 * @subpackage stomprice
 */
get_header(); ?>
    <section class="content">
        <div class="holder">
            <div class="heading-top">
                <?php  get_template_part('inc/breadcrumbs', 'none');?>
            </div>
            <h1>404 - страница не найдена</h1>
            <?php edit_post_link('редактировать', '<p class="btn-edit">', '</p>'); ?>
        </div>
    </section>
    </div>
<?php get_footer(); ?>