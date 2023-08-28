import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Suspense } from "react";
import { Outlet } from "react-router";

const Register = () => {
	return (
		<>
			<title>Registration</title>
			<RegisterForm />
		</>
	);
};

export default Register;
