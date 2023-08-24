import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";
import { selectLoading } from "redux/contacts/selectors";
import { Loader } from "../components/Loader/Loader";

const Tasks = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<>
			<title>Your contacts</title>
			<ContactForm />
			{isLoading && <Loader />}

			<ContactList />
		</>
	);
};

export default Tasks;
