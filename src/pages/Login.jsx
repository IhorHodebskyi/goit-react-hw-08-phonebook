import { LoginForm } from "components/LoginForm/LoginForm";
import { Suspense } from "react";
import { Outlet } from "react-router";

const Login = () => {
	return (
		<>
			<title>Login</title>
			<LoginForm />
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	);
};

export default Login;
