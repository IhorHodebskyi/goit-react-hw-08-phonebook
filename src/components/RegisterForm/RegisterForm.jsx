import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/operations";
import { Form, Label, Input, Button } from "./RegisterForm.styles";

export const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;

		dispatch(
			signUp({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			}),
		);
		form.reset();
	};

	return (
		<Form onSubmit={handleSubmit} autoComplete="off">
			<Label>
				Username
				<Input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					placeholder="Enter name ..."
					required
				/>
			</Label>
			<Label>
				Email
				<Input
					type="email"
					name="email"
					pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
					title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
					placeholder="Enter email ..."
					required
				/>
			</Label>
			<Label>
				Password
				<Input
					type="password"
					name="password"
					pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
					title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
					placeholder="Enter password ..."
					required
				/>
			</Label>
			<Button type="submit">Register</Button>
		</Form>
	);
};
