import { mount } from "@vue/test-utils";
import Counter from "../../src/components/Counter";
describe("Counter", () => {
	const wrapper = mount(Counter);
	it("button click should increment the count", async () => {
		const spy = jest.spyOn(wrapper.vm, "increment");
		wrapper.vm.$forceUpdate();
		const button = wrapper.find("button");
		button.trigger("click");
		await wrapper.vm.$nextTick();
		expect(spy).toHaveBeenCalled();
	});
});
