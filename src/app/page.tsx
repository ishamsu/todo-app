/**
 * Todos
 * - Implement todo view page where i can see full details of the todo selected
 *  this is needed beacuse we can't show entire decription when listing todo if its very lengthy
 *  so user can select a todo and view the entire description.
 * - delete todo if we drag right side
 * - edit todo if we drag on the right side
 * - in mobile show edit screen in bottom drawer - imporovement
 * - in desktop keep the same modal - imporvement
 */

"use client";

import React, {useState} from "react";

import AddTodo from "@/components/AddTodo";
import {useTodoStore} from "@/store/TodoStore";
import TodoItem from "@/components/TodoItem";
import Calendar from "@/components/Calendar";
import {isSameDay, modernFormatDate} from "@/utils/DateUtil";

export default function Home() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selectedDate, setSelectedDate] = useState(new Date());
	const {todos, toggleTodo, deleteTodo, editTodo} = useTodoStore();

	console.log("display todos after saving", todos);

	const selectedDateTodos = todos.filter((todo) => {
		{
			return isSameDay(new Date(todo.date), selectedDate);
		}
	});

	return (
		<div className="max-w-xl mx-auto text-2xl font-semibold  bg-[#EFF1F3] h-screen">
			<div className="h-auto bg-background sticky top-0 z-10 p-4 shadow-sm rounded-b-3xl">
				<Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
			</div>

			<div className="px-3 md:px-0 max-h-screen overflow-y-auto">
				<h3 className="scroll-m-20 text-xl font-semibold tracking-tight my-6">
					{modernFormatDate(selectedDate)}
				</h3>
				<div className="flex flex-col gap-4 ">
					{selectedDateTodos.length <= 0 && (
						<p className="leading-7 font-normal text-center text-base">
							Youre free today ...
						</p>
					)}
					{selectedDateTodos.map((todo) => {
						return (
							<TodoItem
								key={todo.id}
								todo={todo}
								onToggle={toggleTodo}
								onDelete={deleteTodo}
								onEdit={editTodo}
							/>
						);
					})}
				</div>
				<div className="relative">
					<div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl h-auto flex justify-center">
						<AddTodo date={selectedDate} />
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#EFF1F3] rounded-b-none"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
