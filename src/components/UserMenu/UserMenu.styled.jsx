import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	font-size: 16px;
	color: white;
`;

export const Text = styled.p`
	/* font-weight: 700; */
	color: #000000;
	/* font-size: 20px; */
	margin: 0;
`;

export const Button = styled.button`
	padding: 8px 16px;

	color: rgba(0, 0, 0, 0.4);
	font-size: 12px;

	border: 0;
	border-radius: 8px;
	background-color: rgba(135, 207, 235, 0.5);
	cursor: pointer;
	scale: 1;
	transition: background-color 1000ms
		cubic-bezier(0.4, 0, 0.2, 1);
	transition: scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		outline: none;
		background-color: rgba(135, 207, 235, 0.7);
		scale: 1.1;
	}
`;
