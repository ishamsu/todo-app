"use client";

import React, {useState} from "react";

import AddTodo from "@/components/AddTodo";
import {useTodoStore} from "@/store/TodoStore";

export default function Home() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selectedDate, setSelectedDate] = useState(new Date());
	const {todos} = useTodoStore();

	console.log("display todos after saving", todos);

	return (
		<div className="max-w-xl mx-auto text-2xl font-semibold  bg-[#EFF1F3] h-screen">
			<div className="h-36 bg-background sticky top-0 z-10 p-4 shadow-sm rounded-b-3xl">
				Onday
			</div>

			<div className="px-3 md:px-0">
				<h3 className="scroll-m-20 text-xl font-semibold tracking-tight my-6">
					Today
				</h3>
				<div className="flex items-start gap-4 p-4 group bg-background rounded-lg">
					.
				</div>
				<AddTodo date={selectedDate} />
			</div>
		</div>
	);
}
