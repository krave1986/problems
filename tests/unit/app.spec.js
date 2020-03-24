import Vue from "vue";
import App from "../../src/App";

describe("app.spec.js", () => {
	let cmp, vm;
	console.log(vm);

	beforeEach(() => {
		// 创建原始组件的一份拷贝
		cmp = Vue.extend(App);
		vm = new cmp({
			data: {
				// 用假数据来替换data
				messages: ["Cat"]
			}
		}).$mount();
	});

	it('equals messages to ["Cat"]', () => {
		expect(vm.messages).toEqual(["Cat"]);
	});
});
