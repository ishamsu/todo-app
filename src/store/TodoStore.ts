import {create} from "zustand";
import {persist} from "zustand/middleware";
import {v4 as uuidv4} from "uuid";

export interface iTodo {
	id: string;
	title: string;
	description: string;
	isComplated: boolean;
	date: string;
}

interface iTodoState {
	todos: iTodo[];
	addTodo: (todo: Omit<iTodo, "id">) => void;
	toggleTodo: (id: string) => void;
	deleteTodo: (id: string) => void;
	editTodo: (id: string, title: string, description: string) => void;
}

export const useTodoStore = create<iTodoState>()(
	persist(
		(set) => {
			return {
				todos: [],
				addTodo: (todo) => {
					set((state) => {
						return {
							todos: [...state.todos, {...todo, id: uuidv4()}],
						};
					});
				},
				toggleTodo: (id) => {
					set((state) => {
						return {
							todos: state.todos.map((todo) => {
								if (todo.id === id) {
									return {...todo, isComplated: !todo.isComplated};
								} else {
									return todo;
								}
							}),
						};
					});
				},
				deleteTodo: (id) => {
					set((state) => {
						return {
							todos: state.todos.filter((todo) => {
								return todo.id !== id;
							}),
						};
					});
				},
				editTodo: (id, title, description) => {
					set((state) => {
						return {
							todos: state.todos.map((todo) => {
								if (todo.id === id) {
									return {...todo, title, description};
								} else {
									return todo;
								}
							}),
						};
					});
				},
			};
		},
		{
			name: "todo-storage",
		},
	),
);
