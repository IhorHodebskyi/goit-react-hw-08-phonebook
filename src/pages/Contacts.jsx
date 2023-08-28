import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";

import { Loader } from "../components/Loader/Loader";

import { useAuth } from "hooks";
import { selectVisibleContacts } from "redux/contacts/selectors";

const Tasks = () => {
	const dispatch = useDispatch();
	const contacts = useSelector(selectVisibleContacts);
	const { isLoading } = useAuth();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<title>Your contacts</title>
			<ContactForm />
			{isLoading && <Loader />}

			{contacts.length > 0 && <ContactList />}
		</>
	);
};

export default Tasks;
