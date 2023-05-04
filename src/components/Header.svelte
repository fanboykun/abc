<script>
	import { socials } from "$lib/data/data"
	// import Email from "$lib/assets/svg/email.svelte"
	import Github from '$lib/assets/svg/github.svg'

	console.log(socials);
</script>
<div class="sm:px-8 mt-16 sm:mt-32">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="max-w-2xl">
					<h1
						class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
					>
						Software designer, founder, and amateur astronaut.
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I’m Spencer, a software designer and entrepreneur based in New York City. I’m the
						founder and CEO of Planetaria, where we develop technologies that empower regular
						people to explore space on their own terms.
					</p>
					<div class="mt-6 flex gap-6">
						{#each socials as social, index (social.id)}
						<a
							class="group -m-1 p-1"
							aria-label="Follow"
							href="{social.link}">
							{@html social.icon}
							<!-- {@html social.icon} -->
							<!-- <svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
							><path
								d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"
							/></svg> -->
						</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>