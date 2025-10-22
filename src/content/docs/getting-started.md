---
title: Getting Started

export const viewTransition = true;
---

# Getting Started

Thank you so much for trying out our free Alphine components! We're working
on expanding our Alphine.js and Tailwind CSS libraries with more examples in
the future, so stay tuned for more updates.

To use Elysia UI, there are several requirements that you must fulfill,
including:

- <a href="https://alphine.dev" class="font-bold underline">Alphine JS 3.x</a>
- <a href="https://alphine.dev/plugins/focus" class="font-bold underline">Focus Plugins Alphine</a>
- <a href="https://tailwindcss.com/" class="font-bold underline">TailwindCSS V4</a>

Let's see how you can use it in your project!

## 1. Tailwind CSS installation

The first step is to install Tailwind CSS 4.x in your project. Installation
instructions can be found in the official documentation
<a href="https://tailwindcss.com/docs/installation" class="font-bold"
      >Tailwind CSS Installation</a
    >. The process is quite easy and may vary slightly depending on the
technology you use.

## 2. Install the required plugins

In addition to requiring Tailwindcss, there are several plugins you'll need
to install in your project for the Elysia UI Component to run properly,
including:

- <a href="https://alpinejs.dev/plugins/focus" class="font-bold underline">Alphine JS focus Plugins</a>

```bash
   npm install @alphinejs/focus
```

## 3. TailwindCSS Configuration

After installing tailwind css and the required plugins, you should use the
following configuration in your default css file to enable all the required
customizations.

```css
/** Tailwind Css **/
@import "tailwindcss";

/** Class Based Dark Mode **/
@custom-variant dark (&:where(.dark, .dark *));

/* Settings Root and Darkmode **/
:root {
 --background: #fff;
}

.dark {
    --background: var(--color-zinc-900);
}

/* Theme Default */
@theme {
    --color-elysia-primary: #f4a9d9;
    --color-elysia-hover: #ca72a5;

    --color-elysia-50: #fcf3f9;
    --color-elysia-100: #fbe8f5;
    --color-elysia-200: #f9d1ec;
    --color-elysia-300: #f4a9d9;
    --color-elysia-400: #ed79c1;
    --color-elysia-500: #e351a7;
    --color-elysia-600: #d13187;
    --color-elysia-700: #b5216d;
     --color-elysia-800: #951f59;
    --color-elysia-900: #7d1e4d;
    --color-elysia-950: #4c0b2b;
    --font-display: "Inter", sans-serif;
}
```
## 4. Alphine JS
You can install Alphine JS via NPM And add it your bundle like so

```js
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";


window.Alpine = Alpine;

Alpine.plugin(focus);
Alpine.start();
```
Or you can also use the CDN version provided by Alphine JS

```html

/** Alphine Focus Plugins **/
<script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
/** Alphine Core Plugins **/
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

```
## 5. Inter Font (Optional)

Finally, you can include the font we are using by default in the head section of your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
```

## 6. Done, you are ready

Be sure to contact us on the contact form provided for any suggestions on improvements or new components you would like to see.
Thank you for using our free components, have fun and have a nice day.

## Credits
Our thanks to everyone who has worked hard to help us create our free Alphine JS components: 

- <a href="https://alphinejs.dev">Alphine JS (MIT License)</a>
- <a href="https://tailwindcss.com">Tailwindcss (MIT License)</a>