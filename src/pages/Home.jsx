import { Suspense } from "react";
import { Wrapper, Title } from "./Home.styled";
import { Outlet } from "react-router";

const Home = () => {
	return (
		<>
			<Wrapper>
				<Title>Welcome to Phonebook!</Title>{" "}
				<Suspense>
					<Outlet />
				</Suspense>
			</Wrapper>
		</>
	);
};

export default Home;
