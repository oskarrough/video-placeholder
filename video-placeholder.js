class VideoPlaceholder extends HTMLElement {
  // static open = false

  constructor() {
    super()

    this.front = this.querySelector('video-placeholder-front')
    this.back = this.querySelector('template').content

    this.addEventListener('click', this.click)
  }

  click(event) {
    if (event.target.className === 'KwVideo-close') {
      this.removeAttribute('open')
    } else if (!this.getAttribute('open')) {
      this.setAttribute('open', true)
    }
  }

  // Attributes that trigger callback below.
  static get observedAttributes() {
    return ['open']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log({name, oldValue, newValue})

    if (name === 'open' && newValue !== null && newValue !== 'false') {
      if (!this.wasOpened) {
        this.appendChild(this.back.cloneNode(true))
      }
      this.wasOpened = true
    }
  }
}

customElements.define('video-placeholder', VideoPlaceholder)
