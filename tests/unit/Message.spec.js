import { mount } from "@vue/test-utils";
import Message from "../../src/components/Message";

const createCmp = propsData => mount(Message, { propsData });

describe("Message.spec.js", () => {
	describe("Properties", () => {
		// TODO
		it("has a message property", () => {
			const cmp = createCmp({ message: "hey" });
			console.log(cmp);
		});
	});
});
