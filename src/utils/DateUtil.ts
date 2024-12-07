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
