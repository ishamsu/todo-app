import {iColorTheme, iTheme} from "@/customTypes/ThemeTypes";

import Colors from "../Colors";

const colors: iColorTheme = {
	primary: Colors.WHITE,

	secondary: Colors.WHITE,

	accents: {
		btnSecondaryBorder: Colors.WHITE,
	},

	neutrals: {
		divider: Colors.WHITE,
	},
};

const DefaultLightTheme: iTheme = {
	id: "default-light-theme",

	isDark: false,

	colors,
};

export default DefaultLightTheme;
