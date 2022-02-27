<svelte:head>
	<title>Juan Seúlveda</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<script>
    import Header from './Header.svelte';
    import About from './About.svelte';
    // export let name;

</script>



<main class="container">
    <Header />
    <About />
</main>

<style lang="scss">
@import './styles/variables';
@import './styles/media-queries';
@import './styles/container';

:global(body) {
    padding: 0;
    cursor: default;
}
</style>