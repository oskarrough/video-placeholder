# &lt;video-placeholder&gt;

### Prettier embeds for flashy sites

A custom element for the web. Use your own placeholders while lazy-loading the (3rd-party) content.

> [Documentation and examples](https://video-placeholder-skrmkqxpxm.now.sh/).

```html
<link href="video-placeholder.css" rel="stylesheet">
<script src="video-placeholder.js" async></script>

<video-placeholder>
  <button is="video-placeholder-front">
    <img src="https://i.imgur.com/CXmwG8G.jpg">
    <!--- you can put anything here -->
  </button>
  <template>
    <iframe src="https://player.vimeo.com/video/108194249"></iframe>
    <!--- anything you put here will be lazy-loaded, as soon
          as you "open" the placeholder by clicking. -->
  </template>
</video-placeholder>
```

To open a video-placeholder, add an `open` attribute like so:

```html
<video-placeholder open>
```

To close it again, remove the attribute with `el.removeAttribute('open')`.
