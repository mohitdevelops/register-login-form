import "./App.css";
import LoginForm from "./components/login-form/LoginForm";
import RegisterForm from "./components/register-form/RegisterForm";
import { useState } from "react";

function App() {
	const [buttonStatus, setButtonStatus] = useState("register");
	const switchToRegister = () => {
		setButtonStatus("register")
	}
	const switchToLogin = () => {
		setButtonStatus("login")
	}

	return (
		<div>
			<div className="button_wrap">
				<button
					className={classString(buttonStatus === "login" && "active")}
					onClick={() => setButtonStatus("login")}
				>
					Login
				</button>
				<button
					className={classString(buttonStatus === "register" && "active")}
					onClick={() => setButtonStatus("register")}
				>
					Register
				</button>
			</div>
			{buttonStatus === "login" ? (
				<LoginForm switchRegister={switchToRegister} />
			) : (
				<RegisterForm switchLogin={switchToLogin}/>
			)}
		</div>
	);
}

function classString(...args) {
	return args.filter((v) => v).join(" ");
}

export default App;