import { useReducer, useState } from "react";
import module from "../Forms.module.css";
import { FiCheck } from "react-icons/fi";

export default function RegisterForm(props) {
	const [userName, setUserName] = useState("");
	const [isUserNameValid, setIsUserNameValid] = useState();
	const [userEmail, setUserEmail] = useState("");
	const [isUserEmailValid, setIsUserEmailValid] = useState();
	const [userPassword, setUserPassword] = useState("");
	const [isUserPasswordValid, setIsUserPasswordValid] = useState();
	const [repeatPassword, setRepeatPassword] = useState("");
	const [isRepeatPassword, setIsRepeatPassword] = useState();

	function userNameOnChangeHandler(event) {
		setUserName(event.target.value);
	}

	function checkUserNameValid() {
		setIsUserNameValid(userName.includes(" "));
	}

	function userEmailOnChangeHandler(event) {
		setUserEmail(event.target.value);
	}

	function checkUserEmailValid() {
		setIsUserEmailValid(userEmail.includes("@"));
	}

	function userPasswordOnChangeHandler(event) {
		setUserPassword(event.target.value);
	}

	function checkUserPasswordValid() {
		setIsUserPasswordValid(userPassword.trim().length < 5);
	}

	function repeatPasswordHandler(event) {
		setRepeatPassword(event.target.value);
	}

	function cheakRepeatPasswordValid() {
		setIsRepeatPassword(userPassword === repeatPassword);
	}

	return (
		<div className={module.form_wrapper}>
			<h2>Register</h2>
			<form>
				<div
					className={`${module.form_group} ${
						isUserNameValid === false ? module.inValid : ""
					}`}
				>
					{isUserNameValid && <FiCheck className={module.validIcon} />}
					<input
						value={userName}
						onChange={userNameOnChangeHandler}
						onBlur={checkUserNameValid}
						type="text"
						name="username"
						placeholder="Set username *"
					/>
					<div className={module.inputMsg}>
						{isUserNameValid === false && "Please enter your last name"}
					</div>
				</div>
				<div
					className={`${module.form_group} ${
						isUserEmailValid === false ? module.inValid : ""
					}`}
				>
					{isUserEmailValid && <FiCheck className={module.validIcon} />}
					<input
						value={userEmail}
						onChange={userEmailOnChangeHandler}
						onBlur={checkUserEmailValid}
						type="text"
						name="useremail"
						placeholder="Your email *"
					/>
					<div className={module.inputMsg}>
						{isUserEmailValid === false && "Invalid Email (Missing @)"}
					</div>
				</div>
				<div
					className={`${module.form_group} ${
						isUserPasswordValid === true ? module.inValid : ""
					}`}
				>
					{isUserPasswordValid === false ? (
						<FiCheck className={module.validIcon} />
					) : (
						""
					)}
					<input
						value={userPassword}
						onChange={userPasswordOnChangeHandler}
						onBlur={checkUserPasswordValid}
						type="text"
						name="password"
						placeholder="Password *"
					/>
					<div className={module.inputMsg}>
						{isUserPasswordValid && "Password must have 5 character"}
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
