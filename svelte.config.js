import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = { 
    kit: { adapter: adapter() },
    optimizeDeps: {
        exclude: ['layercake']
    }
};

export default config;
