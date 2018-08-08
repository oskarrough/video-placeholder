class WordBlinker extends HTMLElement {
	constructor() {
		super()
		this.speed = 2000
	}
	connectedCallback() {
		requestAnimationFrame(() => {
			this.words = this.textContent.split(', ')
			this.index = 0
			this.interval = setInterval(this.render.bind(this), this.speed)
			this.render()
		})
	}
	render() {
		var word = this.words[this.index]
		this.innerText = word
		this.index = this.index + 1
	}
}
customElements.define('word-blinker', WordBlinker)
