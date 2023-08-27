import styled from "styled-components";
import { Form, Field } from "formik";

export const Forma = styled(Form)`
	display: flex;
	flex-direction: column;
	width: 400px;
	padding: 12px;
	background-color: rgba(0, 0, 0, 0.6);
	border: 3px solid #000000;
	border-radius: 4px;
	margin: 0 auto;
`;

export const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin-bottom: 16px;
	color: #000000;
	font-size: 20px;
`;

export const Input = styled(Field)`
	color: #171718;
	padding: 8px 12px;
	font: inherit;
	cursor: pointer;
`;

export const Button = styled.button`
	padding: 8px 12px;
	font: inherit;
	cursor: pointer;
	border-radius: 4px;
	border: 3px solid #000000;
	color: #000000;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: #b9bcd3;
	}
`;
