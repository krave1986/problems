<template>
	<div>
		<MessageList :messages="messages" />
	</div>
</template>

<script>
import MessageList from "./components/MessageList";

export default {
	name: "App",
	data: () => ({
		messages: ["Hey John", "Howdy Paco"]
	}),
	components: { MessageList }
};
</script>

<style>
body {
	margin: 0;
}
</style>
