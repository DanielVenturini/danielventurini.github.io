/**
* This script avoids the creation of same audio tags in different files
* All tags will be created here and no ones will be created in html files
**/


let AUDIO = {
	brought: 'https://dictionary.cambridge.org/media/english/us_pron/b/bro/broug/brought.mp3',
	bought: 'https://dictionary.cambridge.org/media/english/us_pron/b/bou/bough/bought.mp3',
	caught: 'https://dictionary.cambridge.org/media/english/us_pron/c/cau/caugh/caught.mp3',
	fought: 'https://dictionary.cambridge.org/media/english/us_pron/u/usl/usl30/usl30138.mp3',
	sought: 'https://dictionary.cambridge.org/media/english/us_pron/s/sou/sough/sought.mp3',
	taught: 'https://dictionary.cambridge.org/media/english/us_pron/t/tau/taugh/taught.mp3',
	thought: 'https://dictionary.cambridge.org/media/english/us_pron/t/tho/thoug/thought.mp3',
	beat: 'https://dictionary.cambridge.org/media/english/us_pron/b/bea/beat_/beat.mp3',
	bet: 'https://dictionary.cambridge.org/media/english/us_pron/b/bet/bet__/bet.mp3',
	bid: 'https://dictionary.cambridge.org/media/english/us_pron/b/bid/bid__/bid.mp3',
	cast: 'https://dictionary.cambridge.org/media/english/us_pron/c/cas/cast_/cast.mp3',
	cost: 'https://dictionary.cambridge.org/media/english/us_pron/c/cos/cost_/cost.mp3',
	cut: 'https://dictionary.cambridge.org/media/english/us_pron/c/cut/cut__/cut.mp3',
	hit: 'https://dictionary.cambridge.org/media/english/us_pron/h/hit/hit__/hit.mp3',
	hurt: 'https://dictionary.cambridge.org/media/english/us_pron/h/hur/hurt_/hurt.mp3',
	let: 'https://dictionary.cambridge.org/media/english/us_pron/l/let/let__/let.mp3',
	put: 'https://dictionary.cambridge.org/media/english/us_pron/p/put/put__/put.mp3',
	quit: 'https://dictionary.cambridge.org/media/english/us_pron/q/qui/quit_/quit.mp3',
	read: 'https://dictionary.cambridge.org/media/english/us_pron/u/usc/uscld/uscld02041.mp3',
	set: 'https://dictionary.cambridge.org/media/english/us_pron/s/set/set__/set.mp3',
	shed: 'https://dictionary.cambridge.org/media/english/us_pron/s/she/shed_/shed.mp3',
	shut: 'https://dictionary.cambridge.org/media/english/us_pron/s/shu/shut_/shut.mp3',
	spit: 'https://dictionary.cambridge.org/media/english/us_pron/s/spi/spit_/spit.mp3',
	spread: 'https://dictionary.cambridge.org/media/english/us_pron/s/spr/sprea/spread.mp3',
	bred: 'https://dictionary.cambridge.org/media/english/us_pron/c/cdo/cdo03/cdo0318usbred0654.mp3',
	chose: 'https://dictionary.cambridge.org/media/english/us_pron/c/cho/chose/chose.mp3',
	fed: 'https://dictionary.cambridge.org/media/english/us_pron/f/fed/fed__/fed.mp3',
	met: 'https://dictionary.cambridge.org/media/english/us_pron/m/met/met__/met.mp3',
	shot: 'https://dictionary.cambridge.org/media/english/us_pron/s/sho/shot_/shot_shoot.mp3',
	crept: 'https://dictionary.cambridge.org/media/english/us_pron/c/cre/crept/crept.mp3',
	kept: 'https://dictionary.cambridge.org/media/english/us_pron/k/kep/kept_/kept_keep.mp3',
	slept: 'https://dictionary.cambridge.org/media/english/us_pron/s/sle/slept/slept.mp3',
	swept: 'https://dictionary.cambridge.org/media/english/us_pron/s/swe/swept/swept.mp3',
	paid: 'https://dictionary.cambridge.org/media/english/us_pron/p/pai/paid_/paid.mp3',
	said: 'https://dictionary.cambridge.org/media/english/us_pron/s/sai/said_/said.mp3',
	laid: 'https://dictionary.cambridge.org/media/english/us_pron/l/lai/laid_/laid.mp3',
	bore: 'https://dictionary.cambridge.org/media/english/us_pron/c/cal/cald4/cald4us0269.mp3',
	swore: 'https://dictionary.cambridge.org/media/english/us_pron/s/swo/swore/swore.mp3',
	wore: 'https://dictionary.cambridge.org/media/english/us_pron/w/wor/wore_/wore.mp3',
	tore: 'https://dictionary.cambridge.org/media/english/us_pron/t/tor/tore_/tore.mp3'
}

function create_audio(IDS) {

	for (id of IDS) {
		let audio     = document.createElement('AUDIO')
		audio.preload = 'none'
		audio.id      = id + '_audio'
		audio.type    = 'audio/mpeg'
		audio.src  = AUDIO[id]

		document.body.appendChild(audio)
	}

}
