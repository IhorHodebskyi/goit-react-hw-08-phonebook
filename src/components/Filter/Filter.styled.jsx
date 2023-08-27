import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 20px auto 30px auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 16px;
`;

export const Input = styled.input`
	display: block;
	width: 320px;
	margin-top: 8px;
	padding: 4px 8px;

	border: 0;
	border-radius: 8px;
	background-color: rgba(135, 207, 235, 0.3);
	transition: background-color,
		scale 1000ms cubic-bezier(0.4, 0, 0.2, 1);
	scale: 1;

	&:focus {
		outline: none;
		background-color: rgba(135, 207, 235, 0.7);
		scale: 1.1;
	}
`;
