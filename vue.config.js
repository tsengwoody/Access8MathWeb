module.exports = {
	// 配置使用stylus全局变量
	chainWebpack: (config) => {
		const svgRule = config.module.rule("svg");
		svgRule.uses.clear();
		svgRule
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]",
			})
			.end();
	},

	publicPath: "/Access8MathWeb/",

	pluginOptions: {
		i18n: {
			locale: "zh",
			fallbackLocale: "zh",
			localeDir: "locales",
			enableLegacy: true,
			runtimeOnly: false,
			compositionOnly: true,
			fullInstall: true,
		},
	},
};
