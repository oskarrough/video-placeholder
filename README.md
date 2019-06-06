# &lt;video-placeholder&gt;

A custom element that makes prettier embeds for flashy sites.  
Use your own placeholders while lazy-loading the (3rd-party) content.

⇢ [Documentation and examples](https://video-placeholder.netlify.com/)

## Copy/paste example

```html
<link href="https://cdn.jsdelivr.net/gh/oskarrough/video-placeholder/video-placeholder.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/oskarrough/video-placeholder/video-placeholder.js" async></script>

<video-placeholder>
  <button is="video-placeholder-front">
    <img src="https://i.imgur.com/CXmwG8G.jpg">
    <!-- put anything here -->
  </button>
  <template>
    <iframe src="https://player.vimeo.com/video/108194249"></iframe>
    <!-- and here. will be revealed when above button is clicked -->
  </template>
</video-placeholder>
```

You can open and close it by adding and removing the `open` attribute directly on the element.
