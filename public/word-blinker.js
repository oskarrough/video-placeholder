class WordBlinker extends HTMLElement {
	connectedCallback() {
		requestAnimationFrame(() => {
			this.words = this.textContent.split(', ')
			this.index = 0
			this.interval = setInterval(this.render.bind(this), 1500)
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
