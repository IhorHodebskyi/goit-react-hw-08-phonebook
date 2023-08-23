import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Form, Label, Input, Button } from "./LoginForm.styled";

export const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;

		dispatch(
			logIn({
				email: form.elements.email.value,
				password: form.elements.password.value,
			}),
		);
		form.reset();
	};

	return (
		<Form onSubmit={handleSubmit} autoComplete="off">
			<Label>
				Email
				<Input
					type="email"
					name="email"
					placeholder="Enter your email address"
					required
				/>
			</Label>
			<Label>
				Password
				<Input
					type="password"
					name="password"
					placeholder="Enter your password"
					required
				/>
			</Label>
			<Button type="submit">Log In</Button>
		</Form>
	);
};
