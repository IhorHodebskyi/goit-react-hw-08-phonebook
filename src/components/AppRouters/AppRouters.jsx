import ContactsPage from "Pages/ContactsPage";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="contacts" element={<ContactsPage />} />
			</Routes>
		</>
	);
};

export default AppRoutes;
