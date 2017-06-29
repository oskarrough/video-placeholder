// we could import x-tag here but then the polyfill doesn't work,
// as it needs to be included in the <head>.
// import xtag from 'x-tag';

// instead we rely on a global…
/* global xtag */

xtag.register('kw-video-front', {});
xtag.register('kw-video-close', {});

xtag.register('kw-video', {
	lifecycle: {
		created() {
			this.xtag.front = this.querySelector('kw-video-front');
			this.xtag.back = this.querySelector('template').content;
			if (this.getAttribute('is-open') !== null) {
				this.open();
			}
		},
		inserted() {},
		removed() {},
		attributeChanged() {
			console.log({isOpen: Boolean(this.getAttribute('is-open'))});
		}
	},
	methods: {
		open() {
			if (!this.xtag.wasOpened) {
				console.log('init');
				this.appendChild(this.xtag.back.cloneNode(true));
			}
			console.log('open');
			this.setAttribute('is-open', true);
			this.xtag.wasOpened = true;
		},
		close() {
			this.removeAttribute('is-open');
		}
	},
	events: {
		tap(event) {
			console.log(event);
			if (event.target.className === 'KwVideo-close') {
				console.log('tap->close');
				this.close();
				return;
			}
			if (!this.getAttribute('is-open')) {
				console.log('tap->open');
				this.open();
				return;
			}
		}
	},
	accessors: {
		isOpen: {
			attribute: {
				boolean: true,
				def: false
			}
		}
	}
});
