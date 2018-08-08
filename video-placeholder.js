class VideoPlaceholder extends HTMLElement {
	// open = false

	constructor() {
		super()
		this.addEventListener('click', this.click)
	}

	connectedCallback() {
		if (this.getAttribute('open') !== null) this.revealTemplate()
	}

	// Attributes that trigger callback below.
	static get observedAttributes() {
		return ['open']
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log({name, oldValue, newValue})
		if (name === 'open' && newValue !== null) {
			this.revealTemplate()
		}
	}

	click(event) {
		if (event.target.className === 'KwVideo-close') {
			this.removeAttribute('open')
		} else if (!this.getAttribute('open')) {
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

customElements.define('video-placeholder', VideoPlaceholder)

class VideoPlaceholderFront extends HTMLButtonElement {}
customElements.define('video-placeholder-front', VideoPlaceholderFront, {extends: 'button'})
