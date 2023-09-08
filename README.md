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

Download the repository `zip` file and extract it to your theme's root path. You can also do this easier using the `CLI`:

```
git clone https://github.com/ucoderdev/wordpress-tailwindcss.git
```

## Install dependencies:

Run the command below in your theme's root path:

```
npm install
```

## Watch files

Run the command below in your theme's root path:

```
npm run watch
```

## Build files

Run the command below in your theme's root path:

```
npm run build
```

## Wordpress configuration

You have to load `css` and `js` files from the `assets/dist` folder. You can do this by calling the `wp_enqueue_style` function in `functions.php` file:

```
// Enqueue scripts
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('css-vendors', get_template_directory_uri() . '/assets/dist/vendors.css', array(), '1.0.0', 'all');
    wp_enqueue_style('css-theme', get_template_directory_uri() . '/assets/dist/theme.css', array(), '1.0.0', 'all');

    wp_enqueue_script('js-vendors', get_template_directory_uri() . '/assets/dist/vendors.js', array('jquery'), '1.0.0');
    wp_enqueue_script('js-theme', get_template_directory_uri() . '/assets/dist/theme.js', array('jquery'), '1.0.0');
});
```

## Styles

The main `CSS` file is located in `assets/src/style.scss`. Start developing your styles using it. It supports **Tailwind CSS** and **SASS**.

## JS

The main `JS` file is located in `assets/src/app.js`. Start developing your scripts using it. It supports **jQuery** and **NPM Dependencies**.

[webpack]: https://img.shields.io/npm/v/webpack-cli.svg
[webpack-url]: https://npmjs.com/package/webpack
[node]: https://img.shields.io/node/v/webpack-cli.svg
[node-url]: https://nodejs.org
[issues]: https://img.shields.io/github/issues/ucoderdev/wordpress-tailwindcss
[issues-url]: https://github.com/ucoderdev/wordpress-tailwindcss/issues
[license]: https://img.shields.io/github/license/ucoderdev/wordpress-tailwindcss
[license-url]: https://github.com/ucoderdev/wordpress-tailwindcss/blob/main/LICENSE
