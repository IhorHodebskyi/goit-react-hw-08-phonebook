import styled from "styled-components";

export const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 32px;
	padding: 0 0 0 8px;

	background-color: rgba(135, 207, 235, 0.2);
	border-radius: 8px;

	& span:nth-child(2) {
		margin-left: auto;
	}
`;

export const WrapperText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 8px 8px;

	border: 0;
	border-radius: 8px;
	background-color: rgba(135, 207, 235, 0.3);
	transition: background-color,
		scale 1000ms cubic-bezier(0.4, 0, 0.4, 2);
	scale: 1;

	&:focus {
		outline: none;
		background-color: rgba(135, 207, 235, 0.7);
		scale: 1.1;
	}
`;

export const Button = styled.button`
	padding: 10px 16px;

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

export const WrapperButton = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
