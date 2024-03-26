import { Loader } from "components/Loader/Loader";
import { useAuth } from "hooks";
import { RegisterForm } from "components/RegisterForm/RegisterForm";

const Register = () => {
	const { isLoading } = useAuth();
	console.log("isLoggedIn", isLoading);
	return (
		<>
			<title>Registration</title>
			<RegisterForm />
			{isLoading && <Loader />}
		</>
	);
};

export default Register;
