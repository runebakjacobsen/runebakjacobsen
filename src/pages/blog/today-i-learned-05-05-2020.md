---
path: today-i-learned 05-05-2020
date: 2020-05-05T08:05:29.639Z
title: Today I Learned 05-05-2020
---
Today I found that [WPGraphQL](https://www.wpgraphql.com/) don't support the `is_home()` functionality built-in to WordPress. It was however a quickfix with the following function: 

```php
add_action(
    'graphql_register_types',
    function () {
        register_graphql_field(
            'page',
            'isHome',
            array(
                'type'        => 'Boolean',
                'description' => __( 'Whether the page is the blog archive page', 'wp-graphql' ),
                'resolve'     => function ( $post ) {
                    $blog_page_id = (int) get_option( 'page_for_posts' );
                    $post_id = pll_get_post( $post->ID, 'en' );
                    return $blog_page_id === $post_id;
                },
            )
        );
    }
);
```

After tweeting the functionality, WPGraphQL reached out and it seems it does not exist in the current version because of confusion about `is_home()` and `is_frontpage()`. This did not surprise me since I have myself been confused about this before! So it sounds like it is going to make its way into the plugin! You can see the tweet-thread [here](https://twitter.com/runebakjacobsen/status/1257582875148521473).

See ya!