# WordPress + Tailwind CSS

[![webpack][webpack]][webpack-url]
[![node][node]][node-url]
[![issues][issues]][issues-url]
[![license][license]][license-url]

Developing WordPress theme with Tailwind CSS.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://nodejs.org/en/) or [YARN](https://yarnpkg.com/)
- [Webpack](https://webpack.js.org/)
- [WordPress](https://wordpress.org/download/)

## Installation:

Download the repository `zip` file and `extract` it to your `theme's root path`. 

You can also do this easier using the `CLI`:

```bash
git clone https://github.com/ucoderdev/wordpress-tailwindcss.git
```

## Folder Structure

Make sure your theme files are located as shown below:

```
- wp-content
-- themes
--- your-theme
    - assets
    - packages.json
    - postcss.config.js
    - tailwind.config.js
    - webpack.config.js
```

## Install dependencies:

If all files are located correctly, run the command below in your `theme's root path`:

```bash
npm install
```

## CSS styles

The main `CSS` file is located in `assets/src/style.scss`. Start developing your styles using it. It supports **Tailwind CSS** and **SASS**.

## JS scripts

The main `JS` file is located in `assets/src/app.js`. Start developing your scripts using it. It supports **jQuery** and **NPM Dependencies**.

## Watch files

If you are in `development mode`, run the command below in your `theme's root path`:

```bash
npm run watch
```

## Build files

If you have finished theme development and are in `production mode`, run the command below in your `theme's root path`:

```bash
npm run build
```

**Note:** Do not forget to `change the version` of the `css` and `js` files after building to clear the browser cache.

## Wordpress configuration

You have to load `css` and `js` files from the `assets/dist` folder. You can do this by calling the `wp_enqueue_style` function in `functions.php` file:

```php
// Enqueue scripts
add_action('wp_enqueue_scripts', function () {
    $dist_uri = get_template_directory_uri() . '/assets/dist';

    wp_enqueue_style('css-vendors', $dist_uri . '/vendors.css', array(), '1.0.0', 'all');
    wp_enqueue_style('css-theme', $dist_uri . '/theme.css', array(), '1.0.0', 'all');

    wp_enqueue_script('js-vendors', $dist_uri . '/vendors.js', array('jquery'), '1.0.0');
    wp_enqueue_script('js-theme', $dist_uri . '/theme.js', array('jquery'), '1.0.0');
});
```

## Development mode

We all know that all `CSS` and `JS` files are `cached` by the browser. If you are in `development mode` you can avoid browser caching by `changing the version` of the files:

```php
// Enqueue scripts
add_action('wp_enqueue_scripts', function () {
    $version = '1.0.0';
    $is_development_mode = true;

    if ($is_development_mode) {
        $version = strtotime('now');
    }

    $dist_uri = get_template_directory_uri() . '/assets/dist';

    wp_enqueue_style('css-vendors', $dist_uri . '/vendors.css', array(), $version, 'all');
    wp_enqueue_style('css-theme', $dist_uri . '/theme.css', array(), $version, 'all');

    wp_enqueue_script('js-vendors', $dist_uri . '/vendors.js', array('jquery'), $version);
    wp_enqueue_script('js-theme', $dist_uri . '/theme.js', array('jquery'), $version);
});
```

Now you can run the `npm run watch` command to start developing your theme. 

[webpack]: https://img.shields.io/npm/v/webpack-cli.svg
[webpack-url]: https://npmjs.com/package/webpack
[node]: https://img.shields.io/node/v/webpack-cli.svg
[node-url]: https://nodejs.org
[issues]: https://img.shields.io/github/issues/ucoderdev/wordpress-tailwindcss
[issues-url]: https://github.com/ucoderdev/wordpress-tailwindcss/issues
[license]: https://img.shields.io/github/license/ucoderdev/wordpress-tailwindcss
[license-url]: https://github.com/ucoderdev/wordpress-tailwindcss/blob/main/LICENSE
