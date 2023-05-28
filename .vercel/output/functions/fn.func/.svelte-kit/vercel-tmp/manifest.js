export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/alpinejs.png","images/laravel.png","images/livewire.png","images/nodejs.png","images/python.png","images/sql.png","images/svelte.png","images/tailwind.png","profile-3.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.be65fc28.js","app":"_app/immutable/entry/app.af7ade34.js","imports":["_app/immutable/entry/start.be65fc28.js","_app/immutable/chunks/index.2f21f5f0.js","_app/immutable/chunks/singletons.05005928.js","_app/immutable/entry/app.af7ade34.js","_app/immutable/chunks/index.2f21f5f0.js"],"stylesheets":[],"fonts":[]},
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
