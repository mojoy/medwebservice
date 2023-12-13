<?php




function my_editor_style() {
    global $current_screen;
    switch ($current_screen->post_type) {
        case 'post':
            add_editor_style('editor-style.css');
            break;

        case 'page':
            add_editor_style('editor-style.css');
            break;

        case 'overview':
            add_editor_style('editor-style.css');
            break;
    }
}
add_action( 'admin_head', 'my_editor_style' );




############################
## register taxonomies job
############################

// регистрация таксономии под названием 'jobs'
//
///
/*function wptp_register_taxonomy() {
    register_taxonomy( 'jobs', array( 'job', 'post' ),
        array(
            'labels' => array(
                'name'              => 'Вакансии',
                'singular_name'     => 'Вакансии',
                'search_items'      => 'Поиск вакансии',
                'all_items'         => 'Все вакансии',
                'edit_item'         => 'Редактировать вакансию',
                'update_item'       => 'Обновить вакансию',
                'add_new_item'      => 'Добавить новую вакансию',
                'new_item_name'     => 'Название новой вакансии',
                'menu_name'         => 'Вакансии',
            ),
            'hierarchical' => true,
            'sort' => true,
            'args' => array( 'orderby' => 'term_order' ),
            'rewrite' => array( 'slug' => 'jobs' ),
            'show_admin_column' => true
        )
    );
}
add_action( 'init', 'wptp_register_taxonomy' );

*/



register_post_type('job',
    array(
        'labels' => array(
            'name' => _x('Вакансии', 'post type general name'),
            'singular_name' => _x('Вакансии', 'post type singular name'),
            'add_new' => _x('Добавить Вакансии', 'Добавить'),
            'add_new_item' => __('Добавить Вакансии'),
            'edit_item' => __('Редактировать'),
            'new_item' => __('Новый Вакансии'),
            'view_item' => __('Просмотреть Вакансии'),
            'search_items' => __('Искать Вакансии'),
            'not_found' =>  __('Ничего не найдено'),
            'not_found_in_trash' => __('в Корзине не найдено'),
        ),
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        '_builtin'            => false, // Это настраиваемый тип сообщения, не встроенный
        '_edit_link'          => 'post.php?post=%d',
        'query_var' => true,
        'show_in_quick_edit' => false,
        'show_admin_column' => false,
        //'permalink_epmask' => 'EP_NONE',
        'capability_type' => 'post',
        'hierarchical' => true,
        'menu_position' => 7,
        'menu_icon' => 'dashicons-admin-home',
        //'taxonomies' => array('category','post_tag'),
        'supports' => array(
            'title', // блок заголовка;
            'editor', // - блок для ввода контента;
            'author', // - блог выбора автора;
            'thumbnail', // блок выбора миниатюры записи;
            'excerpt', // - блок ввода цитаты;
            'trackbacks', // - блок уведомлений;
            'custom-fields', // - блок установки произвольных полей;
            'comments', // - блок комментариев;
            'revisions', // - блок ревизий (не отображается пока нет ревизий);
            'page-attributes', // - блок атрибутов постоянных страниц (шаблон и древовидная связь записей, древовидность должна быть включена).
            'post-formats', // - блок форматов записи, если они включены в теме.
        ),
    )
);
register_taxonomy(
    'jobs', 'job', array(
        'hierarchical' => true,
        'label' => 'Категории Вакансий',
        'show_admin_column' => true,
        'query_var' => true,
        'show_in_nav_menus' => true,
        'rewrite' => true
    )
);



/*
function my_scripts(){
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', false, null );
    //wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/jquery-1.10.1.min.js', array(), null, true );
    //wp_enqueue_script( 'jquery-ui', get_template_directory_uri() . '/js/jquery-ui.js', array(), null, true );
    //wp_enqueue_script( 'jquery-fancybox', get_template_directory_uri() . '/js/jquery.fancybox.min.js', array(), null, true );
}
add_action('wp_enqueue_scripts', 'my_scripts');
*/

