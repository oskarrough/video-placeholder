# &lt;video-placeholder&gt;

A custom element that makes prettier embeds for flashy sites.  
Use your own placeholders while lazy-loading the (3rd-party) content.

⇢ [Documentation and examples](https://video-placeholder.now.sh/)

## Usage

```html
<!-- cdn usage coming soon -->
<style href="video-placeholder.css" rel="stylesheet"></script>
<script src="video-placeholder.js"></script>

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

To open a `<video-placeholder>`, add the `open` attribute: `<video-placeholder open>`.  
To close it again, remove the attribute: `el.removeAttribute('open')`.
