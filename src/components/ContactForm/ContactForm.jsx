import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { addContacts } from "redux/contacts/operations";
import {
	Forma,
	Label,
	Input,
	Button,
} from "./ContactForm.styled";
import { ReactComponent as AddIcon } from "icons/add.svg";
import { Notify } from "notiflix";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const initialValues = {
	name: "",
	number: "",
};

const schema = yup.object().shape({
	name: yup.string().required(),
	number: yup.number().required(),
});

export const ContactForm = () => {
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();

	const handleSubmit = (values, { resetForm }) => {
		const isInContacts =
			contacts.length > 0 &&
			contacts.some(
				contact =>
					contact.name.toLowerCase() ===
					values.name.toLowerCase(),
			);

		if (isInContacts) {
			Notify.info(`${values.name} already in contact☝️`);

			return;
		}

		dispatch(addContacts(values));
		resetForm();
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				<Forma autoComplete="off">
					<Label>
						Name
						<Input
							type="text"
							name="name"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							placeholder="Enter a name"
						/>
						<ErrorMessage name="name" component="div" />
					</Label>

					<Label>
						Number
						<Input
							type="tel"
							name="number"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							placeholder="Enter a phone number"
						/>
						<ErrorMessage name="number" component="div" />
					</Label>

					<Button type="submit">
						<AddIcon
							fill="#000000"
							width="25"
							height="25"
						/>
						Add contact
					</Button>
				</Forma>
			</Formik>
		</>
	);
};
