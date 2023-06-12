<script>
	import { stacks } from "$lib/data/data";
	import { fly } from 'svelte/transition';
	import Saos from 'saos'
	let open = false;	
	let selected = [];

	function toggle(stack){
		selected = stack;
		open = !open;
	}
</script>

{#if open}
	<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<!--
		Background backdrop, show/hide based on modal state.

		Entering: "ease-out duration-300"
			From: "opacity-0"
			To: "opacity-100"
		Leaving: "ease-in duration-200"
			From: "opacity-100"
			To: "opacity-0"
		-->
		<div class="fixed inset-0 bg-slate-900/25 backdrop-blur-sm transition-opacity"></div>

		<div class="fixed inset-0 z-10 overflow-y-auto">
		<div class="flex min-h-full items-start justify-center p-4 text-center sm:p-0">
			<!--
			Modal panel, show/hide based on modal state.

			Entering: "ease-out duration-300"
				From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				To: "opacity-100 translate-y-0 sm:scale-100"
			Leaving: "ease-in duration-200"
				From: "opacity-100 translate-y-0 sm:scale-100"
				To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			-->
			<div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
			<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				<div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center bg-white rounded-full sm:mx-0 sm:h-10 sm:w-10">
					<!-- <svg class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
					</svg> -->
					<img class="w-full h-full rounded-lg object-cover" src="{selected?.logo}" alt="">
				</div>
				<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
					<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">My {selected?.name} Skills Description</h3>
					<div class="mt-2">
					<p class="text-sm text-gray-500">
						List Soon!
					</p>
					</div>
				</div>
				</div>
			</div>
			<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
				<button type="button" on:click={() => open =! open} class="inline-flex w-full justify-center rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto">Okay</button>
			</div>
			</div>
		</div>
		</div>
	</div>
{/if}
  

<div class="sm:px-8 mt-16 md:mt-16">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">

			<div class="mx-auto max-w-2xl lg:max-w-5xl py-4">
				<header class="max-w-2xl mt-12">
					<h1 class="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
						Tech Stack
					</h1>
				</header>
				<div class="mt-8 sm:mt-8">
					<ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
						{#each stacks as stack, index (stack.id)}
						<li class="group relative flex flex-col items-center" id="{index}">
								<div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
									<img
										alt=""
										loading="lazy"
										width="32"
										height="32"
										decoding="async"
										data-nimg="1"
										class="rounded-full object-fit w-auto h-auto bg-transparent  dark:bg-zinc-800"
										src="{stack.logo}"
										style="color: transparent;"
									/>
								</div>
								<h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
									<div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
									<button on:click={() => toggle(stack)}>
										<span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
										<span class="relative z-10">{stack.name}</span>
									</button>
								</h2>
								<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
									{stack.description}
								</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>

		</div>
	</div>
</div>

