import {
	createSSRApp
} from "vue";
import * as Pinia from "pinia";
// TDesign 组件库样式（Less 版本，rpx 单位，与 tdesign-miniprogram 一致）
import '@tdesign/uniapp/theme.less';
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia,
	};
}
