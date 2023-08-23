import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
// import { useAuth } from "hooks/useAuth";
import { Header } from "./AppBar.styled";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { useSelector } from "react-redux";

export const AppBar = () => {
	// const { isLoggedIn } = useAuth();
	const isLoggedIn = useSelector(selectIsLoggedIn);

	return (
		<Header>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AuthNav />}
		</Header>
	);
};
