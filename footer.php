
<footer class="footer">
    <div class="holder">
        <div class="row">
            <div class="col-4 col-address">
                ООО «МедВебСервис»<br>
                <a href="tel:+74957837642" class="link-phone">+7 (495) 783-76-42</a>
                <address>
                    Проспект мира 131, офис 3<br>
                    г. Москва, 129226
                </address>
            </div>
            <div class="col-7">
                <strong class="title"><a href="/job/" title="Вакансии">Вакансии</a></strong>
                <ul class="row jobs-list">

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
                                echo '<li class="col-6"><a href="'.get_permalink().'">'.get_the_title().'</a></li>';
                            endwhile;
                        }
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</footer>
</div>
<div class="pop-up" id="pop-up">
    <?php echo do_shortcode('[contact-form-7 id="5" title="popup - Связаться с нами"]'); ?>
</div>

</body>
</html>