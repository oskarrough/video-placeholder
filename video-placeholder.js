class VideoPlaceholder extends HTMLElement {
  // open = false

  constructor(self) {
    // Hack for people using polyfills.
    // https://github.com/WebReflection/document-register-element#upgrading-the-constructor-context
    self = super(self)
    self.addEventListener('click', self.click)
    return self
  }

  connectedCallback() {
    if (this.getAttribute('open') !== null) {
      this.revealTemplate()
    }
  }

  // Attributes that trigger callback below.
  static get observedAttributes() {
    return ['open']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // console.log({name, oldValue, newValue})
    if (name === 'open' && newValue !== null) {
      this.revealTemplate()
    }
  }

  click(event) {
    if (!this.getAttribute('open')) {
      this.setAttribute('open', true)
    }
  }

  revealTemplate() {
    window.requestAnimationFrame(() => {
      var tpl = this.querySelector('template')
      if (!tpl) return
      this.appendChild(tpl.content.cloneNode(true))
      tpl.remove()
    })
  }
}

// Extends button element so we get default accessibility.
class VideoPlaceholderFront extends HTMLButtonElement {}

customElements.define('video-placeholder', VideoPlaceholder)
customElements.define('video-placeholder-front', VideoPlaceholderFront, {extends: 'button'})
