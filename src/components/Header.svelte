<script>
	import { socials } from "$lib/data/data"
	export let place_socials = true;
	export let main_header;
	export let main_description;
</script>
<div class="sm:px-8 mt-16 sm:mt-32">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="max-w-2xl">
					<h1
						class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
					>
						{main_header != null ? main_header : 'title'}
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						{main_description != null ? main_description : 'description'}
					</p>
					{#if place_socials}
					<div class="mt-6 flex gap-6">
						{#each socials as social, index (social.id)}
						<a
							class="group -m-1 p-1"
							aria-label="Follow"
							href="{social.link}">
							{@html social.icon}
						</a>
						{/each}
					</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>