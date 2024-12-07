import * as React from "react";

import {Trash} from "lucide-react";

import {iTodo} from "@/store/TodoStore";
import TodosConstants from "@/config/constants/TodosConstants";

import CheckBox from "../CheckBox";
import Button from "../Button";

interface iTodoItemProps {
	todo: iTodo;
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
}

export function TodoItem({todo, onToggle, onDelete}: iTodoItemProps) {
	return (
		<div className="flex items-center gap-4 p-4 group bg-background rounded-lg ">
			<CheckBox
				className={`w-7 h-7 rounded-full border-2 ${todo.isComplated ? "" : ""}`}
				checked={todo.isComplated}
				onCheckedChange={() => {
					onToggle(todo.id);
				}}
			/>
			<div className="flex-1  overflow-hidden">
				<h3
					className={`font-serif font-semibold text-xl md:text-2xl ${
						todo.isComplated ? "line-through text-primary" : ""
					} ${todo.title.length > TodosConstants.maxTitleLength ? "truncate" : ""}`}
					title={todo.title}
				>
					{todo.title}
				</h3>
				<p
					className="font-serif text-sm md:text-base text-muted-foreground truncate font-normal"
					title={todo.description}
				>
					{todo.description}
				</p>
			</div>
			<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => {
						onDelete(todo.id);
					}}
				>
					<Trash className="h-4 w-4 text-destructive" />
				</Button>
			</div>
		</div>
	);
}
