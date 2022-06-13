import React, { useState } from "react";
import module from "../Forms.module.css";
import { FiCheck } from "react-icons/fi";

export default function LoginForm(props) {
	const [inputUserEmail, setInputUserEmail] = useState("");
	const [isEmailValid, setIsEmailValid] = useState();
	const [inputPassword, setInputPassword] = useState("");
	const [isPasswordValid, setIsPasswordValid] = useState();

	function userEmailInput(event) {
		setInputUserEmail(event.target.value);
	}

	function userPasswordInput(event) {
		setInputPassword(event.target.value);
	}	

	function emailValidateHandler() {
		setIsEmailValid(inputUserEmail.includes("@") || !inputUserEmail === '');
	}

	function passwordValidateHandler() {
		setIsPasswordValid(inputPassword.trim().length > 5);
	}

	const loginFormOnSubmit = function (event) {
		event.preventDefault();
		setInputPassword("");
		setInputUserEmail("");		
	};

	return (
		<div className={module.form_wrapper}>
			<h2>Login</h2>
			<form onSubmit={loginFormOnSubmit}>
				<div
					className={`${module.form_group} ${
						isEmailValid === false ? module.inValid : ""
					}`}
				>
					{isEmailValid && <FiCheck className={module.validIcon} />}
					<input
						onChange={userEmailInput}
						value={inputUserEmail}
						onBlur={emailValidateHandler}
						type="text"
						name="username"
						placeholder="Enter email *"
					/>
					<div className={module.inputMsg}>
						{isEmailValid === false && 'Invalid Email'}
					</div>
				</div>
				<div
					className={`${module.form_group} ${
						isPasswordValid === false ? module.inValid : ""
					}`}
				>
					{isPasswordValid && <FiCheck className={module.validIcon} />}
					<input
						onChange={userPasswordInput}
						value={inputPassword}
						onBlur={passwordValidateHandler}
						type="password"
						name="password"
						placeholder="Password *"
					/>
				</div>
				<div className={module.form_group}>
					<input type="submit" name="submit" value="Login" />
				</div>
				<div className={module.form_group}>
					<p className={module.tag} onClick={props.switchRegister}>New user?</p>
				</div>
			</form>
		</div>
	);
}
