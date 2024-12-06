"use client";

import * as React from "react";
import {useState} from "react";

import {Plus} from "lucide-react";

import {formatDate} from "@/utils/DateUtil";
import {useTodoStore} from "@/store/TodoStore";

import Dialog from "../Dialog";
import {
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../Dialog/Dialog";
import Button from "../Button";
import Input from "../Input";

export function AddTodo({date}: {date: Date}) {
	const [isOpen, setOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const addTodo = useTodoStore((state) => {
		return state.addTodo;
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title.trim()) return;

		addTodo({
			title,
			description,
			isComplated: false,
			date: formatDate(date),
		});

		setTitle("");
		setDescription("");
		setOpen(false);
	};

	const handleInputChangeDesc = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};

	const handleInputChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className="h-16 w-16  mb-10 rounded-full z-10 shadow-xl bg-background hover:bg-gray-200 dark:hover:bg-gray-700 group">
					{/* ---------------FIX IT LATER---------------------------
					tailwindcss is not working here (w-[size] and h-[size])! 
					size prop from lucid-react not working!
					So used inline styles as a temporory fix 
					------------------FIX IT LATER---------------------- */}
					<Plus
						className="text-primary group-hover:text-gray-700 dark:group-hover:text-gray-200"
						style={{width: "29px", height: "29px"}}
					/>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New Task</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className="space-y-4 mt-4">
					<Input
						placeholder="Task title"
						value={title}
						onChange={handleInputChangeTitle}
					/>
					<Input
						placeholder="Task description"
						value={description}
						onChange={handleInputChangeDesc}
					/>
					<Button type="submit" className="w-full">
						Add Task
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
