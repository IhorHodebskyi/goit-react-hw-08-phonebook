import { useSelector } from "react-redux";
import {
	selectUser,
	selectIsLoggedIn,
	selectIsRefreshing,
	selectIsLoading,
} from "redux/auth/selectors";
import { selectContactsIsLoading } from "redux/contacts/selectors";

export const useAuth = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const isRefreshing = useSelector(selectIsRefreshing);
	const user = useSelector(selectUser);
	const isLoading = useSelector(selectIsLoading);
	const contactsIsLoading = useSelector(
		selectContactsIsLoading,
	);

	return {
		isLoggedIn,
		isRefreshing,
		user,
		isLoading,
		contactsIsLoading,
	};
};
