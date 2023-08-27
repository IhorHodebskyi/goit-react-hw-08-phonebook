import { useAuth } from "hooks/useAuth";
import { Link, Wrapper } from "./Navigation.styled";

export const Navigation = () => {
	const { isLoggedIn } = useAuth();

	return (
		<nav>
			<Wrapper>
				{isLoggedIn ? (
					<Link to="/contacts">Contacts</Link>
				) : (
					<Link to="/">Home</Link>
				)}
			</Wrapper>
		</nav>
	);
};
