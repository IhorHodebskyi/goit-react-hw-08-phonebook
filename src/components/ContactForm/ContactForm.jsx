import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { Filter } from "components/Filter/Filter";
import { selectContacts } from "redux/contacts/selectors";
import { addContacts } from "redux/contacts/operations";
import { Form, Label, Input, Button } from "./ContactForm.styled";
import { ReactComponent as AddIcon } from "icons/add.svg";
import { Notify } from "notiflix";
const nameInputId = nanoid();
const numberInputId = nanoid();

export const ContactForm = () => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();

		const isInContacts = contacts.some(
			contact => contact.name.toLowerCase() === name.toLowerCase(),
		);

		if (isInContacts) {
			Notify.info(`${name} already in contact☝️`);

			return;
		}

		dispatch(addContacts({ name, number }));

		setName("");
		setNumber("");
	};

	const handleChange = event => {
		const { name, value } = event.currentTarget;
		switch (name) {
			case "name":
				setName(value);
				break;
			case "number":
				setNumber(value);
				break;
			default:
				return;
		}
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Label htmlFor={nameInputId}>
					Name
					<Input
						type="text"
						name="name"
						placeholder="Enter a name"
						value={name}
						onChange={handleChange}
						required
					/>
				</Label>

				<Label htmlFor={numberInputId}>
					Number
					<Input
						type="tel"
						name="number"
						placeholder="Enter a phone number"
						value={number}
						onChange={handleChange}
						required
					/>
				</Label>

				<Button type="submit">
					<AddIcon fill="#000000" width="25" height="25" />
					Add contact
				</Button>
			</Form>
			<Filter />
		</>
	);
};
