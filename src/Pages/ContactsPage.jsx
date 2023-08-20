import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/thunks";
import { Container, SubTitle, Title, Wrapper } from "./ContactsPage.styled";
import { ContactsForm } from "components/contactsForm/ContactsForm";
import Filter from "components/Filter/Filter";
import IsLoading from "components/IsLoading/IsLoading";
import Error from "components/Error/Error";
import ContactList from "components/contacts/ContactsList";

const ContactsPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
	const { items, isLoading, error } = useSelector(selectContacts);

	return (
		<Container>
			<Title>Phonebook</Title>
			<ContactsForm />
			<SubTitle>Contacts</SubTitle>
			{items.length > 0 ? (
				<Filter />
			) : (
				<Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
			)}
			{isLoading && <IsLoading />}
			{error && <Error />}
			{items.length > 0 && <ContactList />}
		</Container>
	);
};

export default ContactsPage;
