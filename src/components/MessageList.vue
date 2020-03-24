<template>
	<ul>
		<Message :key="index" :message="message" v-for="(message, index) in messages" />
	</ul>
</template>

<script>
import Message from "./Message";
export default {
	name: "MessageList",
	props: ["messages"],
	components: {
		Message
	}
};
</script>
