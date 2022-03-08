//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender:{default:true},
		adapter: adapter({pages:'docs'}),
		paths:{
			base:'/Bible'
		}
	}
};

export default config;
