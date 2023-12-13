<?php
/**
 * Template Name: Архивы
 *
 * @package WordPress
 * @subpackage stomprice
 */


// получение текущего запрашиваемого термина таксономии, чтобы позже использовать его в файле шаблона
$term = get_queried_object();
get_header(); ?>
<div class="content-inner">
    <section class="content">
        <div class="heading-top">
            <?php  get_template_part('inc/breadcrumbs', 'none');?>
        </div>

        <?php echo $term->name; ?>

		<?php if (have_posts()) : ?>

        <?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
        <?php /* If this is a category archive */ if (is_category()) { ?>
        <h1><?php printf( single_cat_title('', false)); ?></h1>

        <?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>
        <h1><?php printf( single_tag_title('', false) ); ?></h1>

        <?php /* If this is a daily archive */ } elseif (is_day()) { ?>
        <h1><?php printf( get_the_time(__('F jS, Y', 'kubrick'))); ?></h1>

        <?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
        <h1><?php printf( get_the_time(__('F, Y', 'kubrick'))); ?></h1>

        <?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
        <h1><?php printf( get_the_time(__('Y', 'kubrick'))); ?></h1>

        <?php /* If this is an author archive */ } elseif (is_author()) { ?>
        <h1><?php _e('Авторский архив', 'kubrick'); ?></h1>

        <?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
        <h1><?php _e('kubrick'); ?></h1>
        <?php }



    $args = array(
        'post_type' => 'animal',
        'animal_cat' => $term->slug
    );
    $query = new WP_Query( $args );


    if ($query->have_posts()) {

        // вывод названия термина в теге заголовка
        echo'<h2>Животное - ' . $term->name . ' Family</h2>';

        // вывод заголовков записей в списке
        echo '<ul>';

        // Начало цикла
        while ( $query->have_posts() ) : $query->the_post(); ?>

            <li class="animal-listing" id="post-<?php the_ID(); ?>">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </li>

        <?php endwhile;

        echo '</ul>';

    } // завершение проверки, содержатся ли записи по запросу
// используем сброс данных записи, чтобы восстановить оригинальный запрос
    wp_reset_postdata();

    ?>
    </section>
</div></div></div>
<?php get_footer(); ?>