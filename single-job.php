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


            <div class="box-top-job section-full">
                <div class="holder">
                    <a href="/job" class="btn-back" title="Вернутся к вакансиям"></a>
                    <h1 class="revealator-within"><?php the_title(); ?></h1>
                    <div class="revealator-within">
                    <?php
                    $arg = get_field('job_text_description');
                    if(!empty($arg)):
                        echo get_field('job_text_description');
                    endif; ?>
                    <a href="#pop-up" class="btn" role="button" data-fancybox="" title="Ваше вознаграждение"><?php echo get_field('job_cost');?><span class="r">a</span></a>
                    </div>
                </div>
            </div>

            <div class="task revealator-within">
                <?php
                $arg = get_field('job_tasks');
                if(!empty($arg)):
                    echo get_field('job_tasks');
                endif; ?>
            </div>


            <div class="content-inner revealator-within">
                <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                    <?php the_content('<p class="serif">' . __('Read the rest of this page &raquo;', 'kubrick') . '</p>'); ?>
                    <?php wp_link_pages(array('before' => '<p><strong>' . __('Pages:', 'kubrick') . '</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
                <?php endwhile; endif; ?>

                <?php edit_post_link('редактировать', '<p class="btn-edit">', '</p>'); ?>
            </div>
        </div>
    </section>



    <div class="section section-big section-full">
        <div class="holder">
            <div class="box-resources-holder">
                <h3 class=" revealator-slidedown">Агенство <span class="name-site">MED<span>WEB</span>SERVICE</span></h3>
                <div class="box-resources">
                    <div class="resources-item work-in revealator-within">
                        <div class="box-resources-top">
                            <span>Работаем<br> с 2008 года</span>
                        </div>
                        Создаем объективно лучшие проекты для компаний Москвы,<br> Воронежа и регионов
                    </div>
                    <div class="resources-item top-3 revealator-within">
                        <div class="box-resources-top">
                            <span>TOP-3<br> Агентств</span>
                        </div>
                        Входим в ТОП-3 ведущих интернет-агентств контекстной рекламы<br> в 2016 году
                    </div>
                    <div class="resources-item premium revealator-within">
                        <div class="box-resources-top">
                            <span>ФИНАЛИСТЫ<br> ПРЕСТИЖНОЙ ПРЕМИИ</span>
                        </div>
                        «Интернет-компания года», финалисты престижной интернет-премии<br> «РИФ-Воронеж» в 2014 и 2017 годах
                    </div>
                </div>
            </div>
        </div>
    </div>

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
