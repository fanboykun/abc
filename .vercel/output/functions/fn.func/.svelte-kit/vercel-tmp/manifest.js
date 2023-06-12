export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/alpinejs.png","images/laravel.png","images/livewire.png","images/nodejs.png","images/python.png","images/sql.png","images/svelte.png","images/tailwind.png","profile-3.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.17631811.js","app":"_app/immutable/entry/app.4114f7c0.js","imports":["_app/immutable/entry/start.17631811.js","_app/immutable/chunks/index.a500c157.js","_app/immutable/chunks/singletons.075a6df2.js","_app/immutable/entry/app.4114f7c0.js","_app/immutable/chunks/index.a500c157.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
