// If there is no support, just show the videos.

function fallback(el) {
	var tpl = el.querySelector('template')
	var front = el.querySelector('button[is="video-placeholder-front"]')
	el.appendChild(tpl.content.cloneNode(true))
	tpl.remove()
	front.remove()
}

function enableVideoPlaceholderFallback() {
	var els = document.querySelectorAll('video-placeholder')
	if (els.length && typeof window.customElements === 'undefined') {
		els.forEach(fallback)
	}
}

document.addEventListener('DOMContentLoaded', enableVideoPlaceholderFallback)
