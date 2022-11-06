module.exports = {
	purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				p1: "14px",
				p2: "80px",
				p3: "32px",
				p4: "50px",
				p5: "16px",
				m1: "42px",
				m2: "24px",
				m3: "59px",
				w1: "84px",
				w2: "42px",
				w3: "87px",
				w4: "40px",
				w5: "52px",
				w6: "400px",
				w7: "675px",
				w8: "712px",
				w9: "602px",
				w10: "241px",
			},
			colors: {
				bg1: "#E8F0FF",
				bg2: "#EAEDF1",
				bg3: "#31374690",
				bd1: "#3F5E8B",
				bd2: "#1B66EF",
			},
		},
	},
	variants: {
		display: ["group-hover"],
		extend: {},
	},
	plugins: [],
};
