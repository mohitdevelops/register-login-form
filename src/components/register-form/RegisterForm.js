import { useReducer, useState } from "react";
import module from "../Forms.module.css";
import { FiCheck } from "react-icons/fi";

export default function RegisterForm(props) {
	// const [userName, setUserName] = useState("");
	// const [isUserNameValid, setIsUserNameValid] = useState();
	// const [userEmail, setUserEmail] = useState("");
	// const [isUserEmailValid, setIsUserEmailValid] = useState();
	// const [userPassword, setUserPassword] = useState("");
	// const [isUserPasswordValid, setIsUserPasswordValid] = useState();
	const [repeatPassword, setRepeatPassword] = useState("");
	const [isRepeatPassword, setIsRepeatPassword] = useState();

	const [usernameState, dispatchUsernameFunc] = useReducer(
		(prevState, action) => {
			if (action.type === "username") {
				return {
					user: action.usernameValue,
					isUserValid: action.usernameValue.includes(" "),
				};
			}
			if (action.type === "usernameonblur") {
				return {
					user: prevState.user,
					isUserValid: prevState.user.includes(" "),
				};
			}
		},
		{
			user: "",
			isUserValid: null,
		}
	);

	const [emailState, dispatchEmailFunc] = useReducer(
		(prevState, action) => {
			if (action.type === "useremail") {
				return {
					email: action.emailValue,
					isEmailValid: action.emailValue.includes("@"),
				};
			}
			if (action.type === "useremailonblur") {
				return {
					email: prevState.email,
					isEmailValid: prevState.email.includes("@"),
				};
			}
		},
		{
			email: "",
			isEmailValid: null,
		}
	);

	const [passwordState, dispatchPasswordFunc] = useReducer(
		(prevState, action) => {
			if (action.type === "password") {
				return {
					password: action.passwordValue,
					isPasswordValid: action.passwordValue.trim().length < 5,
				};
			}
			if (action.type === "passwordonblur") {
				return {
					password: prevState.password,
					isPasswordValid: prevState.password.trim().length < 5,
				};
			}
		},
		{
			password: "",
			isPasswordValid: null,
		}
	);

	function userNameOnChangeHandler(event) {
		dispatchUsernameFunc({
			type: "username",
			usernameValue: event.target.value,
		});
	}

	function checkUserNameValid() {
		dispatchUsernameFunc({
			type: "usernameonblur",
		});
	}

	function userEmailOnChangeHandler(event) {
		dispatchEmailFunc({
			type: "useremail",
			emailValue: event.target.value,
		});
	}

	function checkUserEmailValid() {
		dispatchEmailFunc({
			type: "useremailonblur",
		});
	}

	function userPasswordOnChangeHandler(event) {
		dispatchPasswordFunc({
			type: "password",
			passwordValue: event.target.value,
		});
	}

	function checkUserPasswordValid() {
		dispatchPasswordFunc({
			type: "passwordonblur",
		});
	}

	function repeatPasswordHandler(event) {
		setRepeatPassword(event.target.value);
	}

	function cheakRepeatPasswordValid() {
		setIsRepeatPassword(passwordState.passwordValue === repeatPassword);
	}

	const formSubmit = event => {
		event.preventDefault();
	}

	return (
		<div className={module.form_wrapper}>
			<h2>Register</h2>
			<form onSubmit={formSubmit}>
				<div
					className={`${module.form_group} ${
						usernameState.isUserValid === false ? module.inValid : ""
					}`}
				>
					{usernameState.isUserValid && (
						<FiCheck className={module.validIcon} />
					)}
					<input
						value={usernameState.value}
						onChange={userNameOnChangeHandler}
						onBlur={checkUserNameValid}
						type="text"
						name="username"
						placeholder="Set username *"
					/>
					<div className={module.inputMsg}>
						{usernameState.isUserValid === false &&
							"Please enter your last name"}
					</div>
				</div>
				<div
					className={`${module.form_group} ${
						emailState.isEmailValid === false ? module.inValid : ""
					}`}
				>
					{emailState.isEmailValid && <FiCheck className={module.validIcon} />}
					<input
						value={emailState.emailValue}
						onChange={userEmailOnChangeHandler}
						onBlur={checkUserEmailValid}
						type="text"
						name="useremail"
						placeholder="Your email *"
					/>
					<div className={module.inputMsg}>
						{emailState.isEmailValid === false && "Invalid Email (Missing @)"}
					</div>
				</div>
				<div
					className={`${module.form_group} ${
						passwordState.isPasswordValid === true ? module.inValid : ""
					}`}
				>
					{passwordState.isPasswordValid === false ? (
						<FiCheck className={module.validIcon} />
					) : (
						""
					)}
					<input
						value={passwordState.passwordValue}
						onChange={userPasswordOnChangeHandler}
						onBlur={checkUserPasswordValid}
						type="text"
						name="password"
						placeholder="Password *"
					/>
					<div className={module.inputMsg}>
						{passwordState.isPasswordValid && "Password must have 5 character"}
					</div>
				</div>
				<div
					className={`${module.form_group} ${
						isRepeatPassword === false ? module.inValid : ""
					}`}
				>
					{isRepeatPassword && <FiCheck className={module.validIcon} />}
					<input
						value={repeatPassword}
						onChange={repeatPasswordHandler}
						onBlur={cheakRepeatPasswordValid}
						type="text"
						name="password-repeat"
						placeholder="Repeat Password *"
					/>
					<div className={module.inputMsg}>
						{isRepeatPassword === false ? "Password didn't match" : ""}
					</div>
				</div>
				<div className={module.form_group}>
					<input type="submit" name="submit" value="Register" />
				</div>
				<div className={module.form_group}>
					<p className={module.tag} onClick={props.switchLogin}>
						Already have account?
					</p>
				</div>
			</form>
		</div>
	);
}
