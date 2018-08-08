class VideoPlaceholder extends HTMLElement {
  // static open = false

  constructor() {
    super()

    this.front = this.querySelector('video-placeholder-front')
    this.back = this.querySelector('template').content

		// const shouldOpen = this.getAttribute('open') !== null
    // if (shouldOpen) this.open()

    this.addEventListener('click', this.click)
  }

  click(event) {
    console.log(event)

    if (event.target.className === 'KwVideo-close') {
      console.log('tap->close')
      this.close()
      return
    }

    if (!this.getAttribute('open')) {
      console.log('tap->open')
      this.open()
      return
    }
  }

  open() {
    this.setAttribute('open', true)
  }

  close() {
    this.removeAttribute('open')
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
