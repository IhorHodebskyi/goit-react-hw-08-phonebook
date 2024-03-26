import { useDispatch } from "react-redux";
import { ReactComponent as DeleteIcon } from "icons/delete.svg";

import { AiFillEdit, AiFillSave } from "react-icons/ai";
import { useState } from "react";
import {
	deleteContacts,
	updateContact,
} from "redux/contacts/operations";
import {
	Button,
	Input,
	Item,
	WrapperButton,
	WrapperText,
} from "./Contact.styled";

export const Contact = ({ _id, name, number }) => {
	const dispatch = useDispatch();
	const [isEdits, setIsEdits] = useState(false);
	const [isnumber, setIsNumber] = useState(number);
	const [isName, setIsName] = useState(name);

	const handelCheng = event => {
		const { value, name } = event.target;

		switch (name) {
			case "name":
				setIsName(value);
				break;
			case "number":
				setIsNumber(value);
				break;
			default:
				break;
		}
	};

	const handelEdits = () => {
		setIsEdits(true);
	};

	const handelSave = () => {
		setIsEdits(false);
		dispatch(
			updateContact({
				contactId: _id,
				name: isName,
				number: isnumber,
			}),
		);
	};

	return (
		<Item key={_id}>
			<WrapperText>
				{isEdits ? (
					<Input
						type="text"
						name="name"
						defaultValue={isName}
						onChange={handelCheng}
					/>
				) : (
					<p>{isName}</p>
				)}
				{isEdits ? (
					<Input
						type="number"
						name="number"
						defaultValue={isnumber}
						onChange={handelCheng}
					/>
				) : (
					<p>{isnumber}</p>
				)}
			</WrapperText>

			<WrapperButton>
				{" "}
				{isEdits ? (
					<Button onClick={handelSave}>
						<AiFillSave size={20}></AiFillSave>
					</Button>
				) : (
					<Button onClick={handelEdits}>
						<AiFillEdit size={20}></AiFillEdit>
					</Button>
				)}
				<Button
					type="button"
					name="delete"
					onClick={() => dispatch(deleteContacts(_id))}
				>
					<DeleteIcon
						fill="#000000"
						width="20"
						height="20"
					/>
				</Button>
			</WrapperButton>
		</Item>
	);
};
