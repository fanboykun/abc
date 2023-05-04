<script>
    import { page } from '$app/stores';
    import mainProfile from '$lib/assets/profile-1.jpg';
</script>
<header class="pointer-events-none relative z-50 flex flex-col" style="height:var(--header-height);margin-bottom:var(--header-mb)">
    <div class="top-0 z-10 h-16 pt-6" style="position:var(--header-position)">
        <div
            class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
            style="position:var(--header-inner-position)"
        >
            <div class="mx-auto max-w-7xl lg:px-8">
                <div class="relative px-4 sm:px-8 lg:px-12">
                    <div class="mx-auto max-w-2xl lg:max-w-5xl">
                        <div class="relative flex gap-4">
                            <div class="flex flex-1">
                                <div
                                    class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
                                >
                                    <a aria-label="Home" class="pointer-events-auto" href="/"
                                        ><img
                                            alt=""
                                            fetchpriority="high"
                                            width="512"
                                            height="512"
                                            decoding="async"
                                            data-nimg="1"
                                            class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                                            sizes="2.25rem"
                                            src={mainProfile}
                                            style="color: transparent;"
                                        /></a
                                    >
                                </div>
                            </div>
                            <div class="flex flex-1 justify-end md:justify-center">

                                <nav class="pointer-events-auto  md:block">
                                    <ul
                                        class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
                                    >
                                        <li>
                                            <a
                                                class="relative block px-3 py-2 transition { $page.url.pathname == '/' ? 'text-teal-500 dark:text-teal-400' : ' hover:text-teal-500 dark:hover:text-teal-400' } "
                                                href="/"
                                                >Home<span
                                                    class="{$page.url.pathname == '/' ? 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' : '' }" />
                                                </a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                class="relative block px-3 py-2 transition { $page.url.pathname == '/about' ? 'text-teal-500 dark:text-teal-400' : ' hover:text-teal-500 dark:hover:text-teal-400' }"
                                                href="/about">
                                                About<span
                                                    class="{$page.url.pathname == '/about' ? 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' : '' }" />
                                                </a
                                            >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="flex justify-end md:flex-1">
                                <div class="pointer-events-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>