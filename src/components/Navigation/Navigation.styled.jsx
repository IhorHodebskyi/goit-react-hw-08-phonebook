import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavList = styled.ul`
	display: flex;
	align-items: center;
	padding: 0;
	/* gap: 8px; */
`;

export const Link = styled(NavLink)`
	padding: 8px 16px;

	color: white;

	border-radius: 8px;
	text-decoration: none;
	transition: background-color 1000ms
		cubic-bezier(0.4, 0, 0.2, 1);
	background-color: rgba(135, 207, 235, 0.1);

	&:hover,
	&:focus {
		outline: none;
		background-color: rgba(135, 207, 235, 0.7);
		scale: 1.1;
	}

	&.active {
		color: rgba(0, 0, 0, 0.4);
		background-color: rgba(135, 207, 235, 0.7);
	}
`;
