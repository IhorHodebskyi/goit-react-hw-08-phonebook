import { Suspense } from "react";
import { Wrapper, Title } from "./Home.styled";
import { Outlet } from "react-router";

const Home = () => {
	return (
		<>
			<Wrapper>
				<Title>Welcome to Phonebook!</Title>{" "}
			</Wrapper>
		</>
	);
};

export default Home;
