<script>
	import Stack from "../components/Stack.svelte";
	import Header from "../components/Header.svelte";
	let title = "A Full Stack Web Developer, Irfan Ramadhan."
	let description = "I am an Adaptable, Detail-Oriented, Collaborative, Problem-Solver, Continous Learner, Innovative Person. I live in Indonesia, currently a college student with a major in Informatics Engineering.";
</script>
<svelte:head>
	<title>Portofolio</title>
</svelte:head>
<Header main_header={title} main_description={description}/>
<Stack />