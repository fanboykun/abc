export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/alpinejs.png","images/laravel.png","images/livewire.png","images/nodejs.png","images/python.png","images/sql.png","images/svelte.png","images/tailwind.png","profile-3.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.a56b8e68.js","app":"_app/immutable/entry/app.d827fa0f.js","imports":["_app/immutable/entry/start.a56b8e68.js","_app/immutable/chunks/index.62ce7001.js","_app/immutable/chunks/singletons.f43ac7cf.js","_app/immutable/entry/app.d827fa0f.js","_app/immutable/chunks/index.62ce7001.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
