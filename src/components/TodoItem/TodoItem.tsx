import * as React from "react";

import {iTodo} from "@/store/TodoStore";
import TodosConstants from "@/config/constants/TodosConstants";

import CheckBox from "../CheckBox";

interface iTodoItemProps {
	todo: iTodo;
	onToggle: (id: string) => void;
}

export function TodoItem({todo, onToggle}: iTodoItemProps) {
	return (
		<div className="flex items-start gap-4 p-4 group bg-background rounded-lg ">
			<CheckBox
				className="w-8 h-8 rounded-full border-2"
				checked={todo.isComplated}
				onCheckedChange={() => {
					onToggle(todo.id);
				}}
			/>
			<div className="flex-1 -mt-2 overflow-hidden">
				<h3
					className={`font-semibold text-xl md:text-2xl ${
						todo.isComplated ? "line-through text-muted-foreground" : ""
					} ${todo.title.length > TodosConstants.maxTitleLength ? "truncate" : ""}`}
					title={todo.title}
				>
					{todo.title}
				</h3>
				<p
					className="text-sm md:text-base text-muted-foreground truncate"
					title={todo.description}
				>
					{todo.description}
				</p>
			</div>
		</div>
	);
}
