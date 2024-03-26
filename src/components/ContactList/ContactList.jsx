import React from "react";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";

import { List } from "./ContactList.styled";
import { Contact } from "components/Contact/Contact";

export const ContactList = () => {
	const contacts = useSelector(selectVisibleContacts);

	return (
		<List>
			{contacts.map(({ _id, name, number }) => (
				<Contact _id={_id} name={name} number={number} />
			))}
		</List>
	);
};
