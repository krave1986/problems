import { mount } from "@vue/test-utils";
import Message from "../../src/components/Message";

const createCmp = propsData => mount(Message, { propsData });

describe("Message.spec.js", () => {
	let cmp;
	describe("Properties", () => {
		// TODO
		it("has a message property", () => {
			cmp = createCmp({ message: "hey" });
		});
	});
});
