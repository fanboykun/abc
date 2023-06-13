import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const mainProfile = "/_app/immutable/assets/profile-1.0631ae67.jpg";
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<header class="pointer-events-none relative z-20 flex flex-col font-mono"><div class="top-0 z-10 h-16 pt-6"><div class="sm:px-8 w-full"><div class="mx-auto max-w-7xl lg:px-8"><div class="relative px-4 sm:px-8 lg:px-12"><div class="mx-auto max-w-2xl lg:max-w-5xl"><div class="relative flex gap-4"><div class="flex flex-1"><div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"><a aria-label="Home" class="pointer-events-auto" href="/"><img alt="" fetchpriority="high" width="512" height="512" decoding="async" data-nimg="1" class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9" sizes="2.25rem"${add_attribute("src", mainProfile, 0)} style="color: transparent;"></a></div></div>
							<div class="flex flex-1 justify-end md:justify-center"><nav class="pointer-events-auto md:block"><ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"><li><a class="${"relative block px-3 py-2 transition " + escape(
    $page.url.pathname == "/" ? "text-teal-500 dark:text-teal-400" : " hover:text-teal-500 dark:hover:text-teal-400",
    true
  )}" href="/">Home<span${add_attribute(
    "class",
    $page.url.pathname == "/" ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" : "",
    0
  )}></span></a></li>
										<li><a class="${"relative block px-3 py-2 transition " + escape(
    $page.url.pathname == "/projects" ? "text-teal-500 dark:text-teal-400" : " hover:text-teal-500 dark:hover:text-teal-400",
    true
  )}" href="/projects">Projects<span${add_attribute(
    "class",
    $page.url.pathname == "/projects" ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" : "",
    0
  )}></span></a></li>
										<li><button class="${"relative block px-3 py-2 transition " + escape(
    $page.url.pathname == "/insight" || $page.url.pathname == "/contact" ? "text-teal-500 dark:text-teal-400" : " hover:text-teal-500 dark:hover:text-teal-400",
    true
  )}">About<span${add_attribute(
    "class",
    $page.url.pathname == "/insight" ? "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" : "",
    0
  )}></span></button>
											${``}</li></ul></nav></div>
							<div class="flex justify-end md:flex-1"><div class="pointer-events-auto"><a href="https://github.com/fanboykun/personal-portofolio"><button class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"><svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg></button></a></div></div></div></div></div></div></div></div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="mt-32"><div class="sm:px-8"><div class="mx-auto max-w-7xl lg:px-8"><div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"><div class="relative px-4 sm:px-8 lg:px-12"><div class="mx-auto max-w-2xl lg:max-w-5xl"><div class="flex flex-col items-center justify-between gap-6 sm:flex-row"><div class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"><a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/insight">Insight
                                </a>
                                <span>|</span>
                                <a class="transition hover:text-teal-500 dark:hover:text-teal-400" href="/contact">Contact
                                </a></div>
                            <p class="text-sm text-zinc-400 dark:text-zinc-500">© 2023 Irfan Ramadhan. All rights reserved.
                            </p></div></div></div></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><div class="fixed inset-0 flex justify-center sm:px-8"><div class="flex w-full max-w-7xl lg:px-8"><div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div></div></div>
	<div class="relative">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
        <main>${slots.default ? slots.default({}) : ``}</main>
        ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
