/* eslint-disable @typescript-eslint/naming-convention */
export function getWeekDays(date: Date = new Date()): Date[] {
	const sunday = new Date(date);
	sunday.setDate(date.getDate() - date.getDay());

	return Array.from({length: 7}, (_, i) => {
		const day = new Date(sunday);
		day.setDate(sunday.getDate() + i);
		return day;
	});
}

export function formatDate(date: Date): string {
	return date.toISOString().split("T")[0];
}

// Change the function name later
export function modernFormatDate(date: Date): string {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const today = new Date();
	const diff = date.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);

	if (diff === 0) return "Today";
	if (diff === -86400000) return "Yesterday";
	if (diff === 86400000) return "Tomorrow";

	return `${days[date.getDay()]}, ${months[date.getMonth()]}`;
}

export function isSameDay(date1: Date, date2: Date): boolean {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

export function dateToMonthFormatted(date: Date): string {
	return date.toLocaleString("default", {
		month: "long",
		year: "numeric",
	});
}
