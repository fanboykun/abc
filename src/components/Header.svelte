<script>
	import { socials } from "$lib/data/data"
	import Saos from "saos";
	export let place_socials = true;
	export let main_header;
	export let main_description;
	function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>
<div class="sm:px-8 mt-16 sm:mt-18">
	<div class="mx-auto max-w-7xl lg:px-8">
		<div class="relative px-4 sm:px-8 lg:px-12">
			<div class="mx-auto max-w-2xl lg:max-w-5xl">
				<div class="max-w-2xl">
					<h1 in:typewriter class="text-4xl font-mono font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
						{main_header != null ? main_header : 'title'}
					</h1>
					<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						{main_description != null ? main_description : 'description'}
					</p>
					{#if place_socials}
					<div class="mt-6 flex gap-6">
						{#each socials as social, index (social.id)}
						<Saos animation={'roll-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) 0.2s both'} once={true}>
							<a
								class="group -m-1 p-1"
								aria-label="Follow"
								href="{social.link}">
								{@html social.icon}
							</a>
						</Saos>
						{/each}
					</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>