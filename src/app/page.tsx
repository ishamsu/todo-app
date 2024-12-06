"use client";

import React, {useState} from "react";

import AddTodo from "@/components/AddTodo";
import {useTodoStore} from "@/store/TodoStore";
import TodoItem from "@/components/TodoItem";

export default function Home() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selectedDate, setSelectedDate] = useState(new Date());
	const {todos, toggleTodo, deleteTodo} = useTodoStore();

	console.log("display todos after saving", todos);

	return (
		<div className="max-w-xl mx-auto text-2xl font-semibold  bg-[#EFF1F3] h-screen">
			<div className="h-36 bg-background sticky top-0 z-10 p-4 shadow-sm rounded-b-3xl">
				Onday
			</div>

			<div className="px-3 md:px-0 max-h-screen overflow-y-auto">
				<h3 className="scroll-m-20 text-xl font-semibold tracking-tight my-6">
					Today
				</h3>
				<div className="flex flex-col gap-4 ">
					{todos.map((todo) => {
						return (
							<TodoItem
								key={todo.id}
								todo={todo}
								onToggle={toggleTodo}
								onDelete={deleteTodo}
							/>
						);
					})}
				</div>
				<div className="relative">
					<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl h-auto flex justify-center">
						<AddTodo date={selectedDate} />
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white rounded-b-none"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
