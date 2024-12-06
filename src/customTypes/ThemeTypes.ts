import {ColorValue} from "@/customTypes/CommonTypes";

export interface iNeutrals {
	divider: ColorValue;
}

export interface iAccentColors {
	btnSecondaryBorder: ColorValue;
}

export interface iSemanticColor {
	bg: ColorValue;

	color: ColorValue;
}

export interface iSemanticColors {
	error: iSemanticColor;

	warning: iSemanticColor;

	success: iSemanticColor;

	info: iSemanticColor;
}

export interface iColorTheme {
	primary: ColorValue;

	secondary: ColorValue;

	accents: iAccentColors;

	neutrals: iNeutrals;
}

export interface iTheme {
	id: string;

	isDark: boolean;

	colors: iColorTheme;
}

export interface iProvidedValue {
	theme: iTheme;

	changeTheme: (themeId?: string) => void;
}
