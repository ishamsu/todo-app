type NullableNumber = number | null;
type NullableString = string | null;
type NullableBoolean = string | null;

type NumericArray = Array<number>;
type StringArray = Array<string>;
type NullableNumericArray = NumericArray | null;
type NullableStringArray = StringArray | null;

type ComponentIdType = string | number | undefined | null;

type BasicCallbackType = () => void;

type ColorValue = string;

interface iNormalizedObjectValueBase {
	id: string;
}
interface iNormalizedObjectDetails<T extends iNormalizedObjectValueBase> {
	[key: string]: T;
}

interface iNormalizedObject<T extends iNormalizedObjectValueBase> {
	ids: Array<string>;
	details: iNormalizedObjectDetails<T>;
}

export type {
	NullableNumber,
	NullableString,
	NullableBoolean,
	NumericArray,
	StringArray,
	NullableNumericArray,
	NullableStringArray,
	ComponentIdType,
	BasicCallbackType,
	ColorValue,
	iNormalizedObject,
};
