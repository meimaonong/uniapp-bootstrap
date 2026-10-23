import {
	createSSRApp
} from "vue";
import * as Pinia from "pinia";
// TDesign 组件库样式：固定加载纯浅色 token，深色 token 由 theme-dark.css 覆盖
import '@tdesign/uniapp/theme-light.less';
import './styles/theme-dark.css';
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia,
	};
}
