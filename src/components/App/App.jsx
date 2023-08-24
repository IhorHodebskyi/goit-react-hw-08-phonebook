import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";
import { Wrapper } from "./App.styled";
import { Loader } from "components/Loader/Loader";

const Home = lazy(() => import("pages/Home"));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import("pages/Login"));
const Contacts = lazy(() => import("pages/Contacts"));

export const App = () => {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? (
		<Loader />
	) : (
		<Wrapper>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route
						path="register"
						element={
							<RestrictedRoute redirectTo="login" component={<Register />} />
						}
					/>

					<Route
						path="login"
						element={
							<RestrictedRoute redirectTo="contacts" component={<Login />} />
						}
					/>

					<Route
						path="contacts"
						element={
							<PrivateRoute redirectTo="login" component={<Contacts />} />
						}
					/>
					<Route path="*" element={<Home />} />
				</Route>
			</Routes>
		</Wrapper>
	);
};
