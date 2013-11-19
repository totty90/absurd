if(typeof demos === "undefined") { demos = []; }demos.push({name: "01. Basic", content: 'api.add({\n	body: {\n		marginTop: "20px",\n		width: "100%"\n	},\n	header: {\n		width: "100%"\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "02. Nesting", content: 'api.add({\n	body: {\n		marginTop: "20px",\n		width: "100%",\n		p: {\n			color: "#BADA55"\n		}\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "03. Pseudo classes", content: 'api.add({\n	body: {\n		a: {\n			color: "#FFF",\n			":hover": {\n				textDecoration: "none"\n			},\n			":after": {\n				display: "block",\n				content: "---"\n			}\n		}\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "04. Using JavaScript variables and functions", content: 'var themeColor = "#BADA55";\nvar textStyles = function(size) {\n	return {\n		color: themeColor,\n		fontSize: size + "px",\n		lineHeight: size + "px"\n	}\n}\napi.add({\n	body: {\n		color: function() {\n			return "#000"\n		},\n		p: textStyles(16),\n		h1: [\n			textStyles(50),\n			{ lineHeight: "60px" } \n		]\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "05. Mixins (using Storage)", content: '// single value\napi.storage("fontsize", "16px");\n// multiple values\napi.storage({\n	color: "red",\n	theme: function(color) {\n		return {\n			color: color,\n			background: api.lighten(color, 50)\n		}\n	}\n});\napi.add({\n	body: {\n		background: api.storage("color"),\n		section: [\n			api.storage("theme")("#999"),\n			{ marginTop: "20px" },\n			{ fontSize: api.storage("fontsize") }\n		]\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "06. Plugins", content: 'api.plugin("hoverEffect", function(api, color) {\n	return {\n		":hover": {\n			color: color,\n            background: api.lighten(color, 60)\n		}\n	};\n});\napi.add({\n	a: {\n		color: "#000",\n		hoverEffect: "#999"\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "07. Media queries", content: 'api.add({\n	body: {\n		".wrapper": {\n			width: "940px",\n			"@media all (min-width: 550px)": {\n				width: "400px"\n			}\n		},\n		p: {\n			"@media all (min-width: 550px)": {\n				fontSize: "20px"\n			}	\n		}\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "08. Sending raw data", content: 'api\n.add({\n	body: {\n		".wrapper": {\n			width: "940px",\n			fontSize: "20px"\n		}\n	}\n})\n.raw("/* content */")\n.add({\n	".content": {\n		background: "#000"\n	}\n})\n.raw(".absurdjs { color: #F00; }");\n'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "09. Register new API method", content: 'api.register("buttonize", function(selector) {\n	var styles = {};\n	styles[selector] = {\n		cursor: "pointer",\n		display: "block",\n		background: "#aaa",\n		":hover": {\n			background: "#ddd"\n		}\n	};\n	api.add(styles);\n});\napi.buttonize(".header a");'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "10. Hooks", content: 'api.hook("add", function(rules) {	\n	if(rules.grid) {\n		var styles = {};\n		styles[rules.grid.parent] = parentStyles = {\n			":after": {\n				display: "table",\n				content: "",\n				clear: "both"\n			}\n		};\n		parentStyles[rules.grid.child] = {\n			width: (100 / rules.grid.columns) + "%",\n			float: "left"\n		};\n		api.add(styles);\n		return true;\n	}\n});\napi.add({\n	grid: {\n		parent: ".header .menu",\n		child: ".link",\n		columns: 4\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "11. Use custom parser (compiler)", content: 'var processor = function(rules, callback, options) {\n	callback(null, rules);\n};\napi.add({\n	body: {\n		p: { fontSize: "20px" },\n		section: { background: "#BADA55" }\n	}\n});\napi.compile(function(err, json) {\n	// json object here contains the raw\n	// information stored in Absurd.\n	// Check your console to see the result.\n	console.log(json);\n}, { processor: processor });'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "12. Use it as HTML preprocessor", content: 'api.morph("html");\napi.add({ p: "text here" }, "paragraph");\napi.add({ \n	div: {\n		_: "footer",\n		_attrs: { \n			class: "footer", \n			dataBehaviour: "clickable" \n		}\n	}\n}, "footer");\napi.add({\n	html: {\n		head: {\n			title: "AbsurdJS is awesome"\n		},\n		body: {\n			_: "<h1>AbsurdJS</h1>",\n			_tpl: ["paragraph", "footer"]\n		}\n	}\n});'});
if(typeof demos === "undefined") { demos = []; }demos.push({name: "13. Emmet like syntax", content: 'api.morph("html");\napi.add({\n	html: {\n		head: {\n			title: "AbsurdJS is awesome"\n		},\n		body: {\n			\'.content.left#wrapper\': {\n				\'a[href="http://krasimir.github.io/absurd/"]\': "AbsurdJS documentation",\n				\'p.text[title="description" data-type="selectable"]\': "CSS preprocessor"\n			}\n		}\n	}\n});'});