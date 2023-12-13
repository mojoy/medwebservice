<?php
/**
 * Template Name: вакансии tax
 * @package WordPress
 * @subpackage
 */

get_header(); ?>
<section class="content">

    <div class="heading-top">
        <?php  get_template_part('inc/breadcrumbs', 'none');?>
    </div>

    <div class="box-top-job box-top-job-main section-full">
        <div class="holder">
            <div class="heading">
                <h1 class="title">ВАКАНСИИ MEDWEBSERVICE</h1>
            </div>
            <div class="row jobs-list-main">
                <?php
                $custom_terms = get_terms('jobs');
                foreach($custom_terms as $custom_term) {
                    wp_reset_query();
                    $args = array('post_type' => 'job',
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'jobs',
                                'field' => 'slug',
                                'terms' => $custom_term->slug,
                            ),
                        ),
                    );

                    $loop = new WP_Query($args);
                    if($loop->have_posts()) {
                        //echo '<h2>'.$custom_term->name.'</h2>';
                        while($loop->have_posts()) : $loop->the_post();
                            echo '<div class="col-6  revealator-slideright"><a href="'.get_permalink().'">'.get_the_title().'</a></div>';
                        endwhile;
                    }
                }
                ?>
            </div>
        </div>
    </div>
</section>

<section class="section section-contact-form">
    <div class="holder">
        <strong class="ttl">СВЯЗАТЬСЯ С НАМИ</strong>
        <?php echo do_shortcode('[contact-form-7 id="4" title="Контактная форма 1"]'); ?>
    </div>
</section>

<section class="section section-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.4541609677294!2d37.64926357359813!3d55.83218454785599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5367e43058763%3A0x729b2515db9841!2z0L_RgC3RgiDQnNC40YDQsCwgMTMxLCAzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI5MjI2!5e0!3m2!1sru!2sua!4v1563187635244!5m2!1sru!2sua" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
</section>
<?php get_footer(); ?>
