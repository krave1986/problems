<template>
	<div>
		<Counter />
	</div>
</template>

<script>
import Counter from "./components/Counter";

export default {
	name: "App",
	data: () => ({}),
	components: { Counter }
};
</script>

<style>
body {
	margin: 0;
}
</style>
