/**
 * Todos
 * - frontend validations
 * - write a schema using joi (https://joi.dev/)
 * - define title maximum length
 * - define descrion maximum length
 * - implement loader
 * - disable the btn if its loading
 */

import * as React from "react";

import {Pencil, Save, Trash} from "lucide-react";

import {iTodo} from "@/store/TodoStore";
import TodosConstants from "@/config/constants/TodosConstants";
import {useIsMobile} from "@/hooks/use-mobile";

import CheckBox from "../CheckBox";
import Button from "../Button";
import Input from "../Input";
import Dialog from "../Dialog";
import {DialogContent, DialogHeader, DialogTitle} from "../Dialog/Dialog";
import Drawer from "../Drawer";
import {
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "../Drawer/Drawer";

interface iTodoItemProps {
	todo: iTodo;
	onToggle: (id: string) => void;
	onDelete: (id: string) => void;
	onEdit: (id: string, title: string, description: string) => void;
}

export function TodoItem({todo, onToggle, onDelete, onEdit}: iTodoItemProps) {
	const isMobile = useIsMobile();
	const [isEditing, setIsEditing] = React.useState(false);
	const [editedTitle, setEditedTitle] = React.useState(todo.title);
	const [editedDescription, setEditedDescription] = React.useState(
		todo.description,
	);

	const handleSave = () => {
		onEdit(todo.id, editedTitle, editedDescription);
		setIsEditing(false);
	};

	if (isEditing) {
		if (isMobile) {
			return (
				<Drawer open={isEditing} onOpenChange={setIsEditing}>
					<DrawerContent>
						<DrawerHeader className="text-left">
							<DrawerTitle>Edit todo</DrawerTitle>
						</DrawerHeader>
						<form className="space-y-4 mt-3 px-4 mb-4">
							<Input
								value={editedTitle}
								onChange={(e) => {
									return setEditedTitle(e.target.value);
								}}
								placeholder="Todo title"
							/>
							<Input
								value={editedDescription}
								onChange={(e) => {
									return setEditedDescription(e.target.value);
								}}
								placeholder="Todo description"
							/>
						</form>
						<DrawerFooter className="pt-2">
							<Button className="w-full" onClick={handleSave}>
								<Save /> Save
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			);
		}
		return (
			<Dialog open={isEditing} onOpenChange={setIsEditing}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit todo</DialogTitle>
					</DialogHeader>
					<Input
						value={editedTitle}
						onChange={(e) => {
							return setEditedTitle(e.target.value);
						}}
						placeholder="Todo title"
					/>
					<Input
						value={editedDescription}
						onChange={(e) => {
							return setEditedDescription(e.target.value);
						}}
						placeholder="Todo description"
					/>
					<div className="flex gap-2">
						<Button className="w-full" onClick={handleSave}>
							<Save /> Save
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		);
	}
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
						return setIsEditing(true);
					}}
				>
					<Pencil className="h-4 w-4" />
				</Button>
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
