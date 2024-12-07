"use client";

import React, {useState, useRef, useEffect} from "react";

import {dateToMonthFormatted, getWeekDays, isSameDay} from "@/utils/DateUtil";

import Button from "../Button";

interface iScrollableCalendarProps {
	selectedDate: Date;
	onDateSelect: (date: Date) => void;
}

export function Calendar({
	selectedDate,
	onDateSelect,
}: iScrollableCalendarProps) {
	const [currentWeekStart, setCurrentWeekStart] = useState(() => {
		const startDay = new Date(selectedDate);
		startDay.setDate(startDay.getDate() - startDay.getDay());
		return startDay;
	});

	const scrollRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const weeks = [
		getWeekDays(new Date(currentWeekStart.getTime() - 7 * 24 * 60 * 60 * 1000)),
		getWeekDays(currentWeekStart),
		getWeekDays(new Date(currentWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000)),
	];

	const navigateWeek = (direction: "prev" | "next") => {
		setCurrentWeekStart((prevStart) => {
			const newStart = new Date(prevStart);
			newStart.setDate(newStart.getDate() + (direction === "next" ? 7 : -7));
			return newStart;
		});
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		setIsDragging(true);
		setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
		setScrollLeft(scrollRef.current?.scrollLeft || 0);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 2;
		if (scrollRef.current) {
			scrollRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	useEffect(() => {
		// when page loads show current day at the center
		// we can make it by scrolling it to center
		// make sure its center in mobile and tablets
		// ---------IMPLEMENT IT LATER--------------------
		if (scrollRef.current) {
			scrollRef.current.scrollLeft = scrollRef.current.offsetWidth;
		}

		const currentScrollRef = scrollRef.current;

		const handleScroll = () => {
			if (!currentScrollRef) return;
			const {scrollLeft, scrollWidth, clientWidth} = currentScrollRef;

			if (scrollLeft === 0) {
				navigateWeek("prev");
				currentScrollRef.scrollLeft = clientWidth;
			} else if (scrollLeft + clientWidth === scrollWidth) {
				navigateWeek("next");
				currentScrollRef.scrollLeft = clientWidth;
			}
		};

		currentScrollRef?.addEventListener("scroll", handleScroll);
		return () => {
			currentScrollRef?.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="">
			<div className="flex justify-between items-center mb-4">
				<span className="font-semibold">
					{dateToMonthFormatted(weeks[1][6])}
				</span>
			</div>
			<div
				ref={scrollRef}
				className="overflow-x-auto cursor-grab select-none pb-3"
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div className="flex" style={{width: "300%"}}>
					{weeks.map((week) => {
						return (
							<div
								key={week[0].toISOString()}
								className={`flex-shrink-0`}
								style={{width: "33.333%"}}
							>
								<div className="grid grid-cols-7 gap-0">
									{week.map((date, dateIndex) => {
										return (
											<Button
												key={date.toISOString()}
												className={`flex w-[56px] h-auto rounded-2xl py-3 px-0 flex-col items-center ${
													isSameDay(date, selectedDate) &&
													"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
												}`}
												onClick={() => {
													return onDateSelect(new Date(date));
												}}
												variant="ghost"
											>
												<div
													className={`text-center text-sm font-semibold ${
														isSameDay(date, selectedDate)
															? "text-primary-foreground"
															: "text-muted-foreground"
													}`}
												>
													{["S", "M", "T", "W", "T", "F", "S"][dateIndex]}
												</div>
												<div className={`text-lg font-bold`}>
													{date.getDate()}
												</div>
											</Button>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
