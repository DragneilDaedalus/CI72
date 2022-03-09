import InputComponent from '../../components/input.js';
import ButtonComponent from '../../components/button.js';
import RegisterScreen from '../Register/register.js';
import app from '../../script.js';
import { checkEmail, checkPassword } from '../../common/validation.js';
class LoginScreen {
	$email;
	$password;

	$container;

	$link;

	$formLogin;
	$btnSubmit;
	$titleScreen;

	constructor() {
		this.$container = document.createElement('div');
		this.$container.classList.add();

		this.$formLogin = document.createElement('form');
		this.$formLogin.classList.add('form-container');
		this.$formLogin.addEventListener('submit', this.handleSubmit);

		this.$titleScreen = document.createElement('div');
		this.$titleScreen.classList.add('big-title');
		this.$titleScreen.innerText = 'Login';

		this.$link = document.createElement('a');
		this.$link.classList.add('link');
		this.$link.innerText = 'Create a new account';
		this.$link.addEventListener('click', this.handleChangeScreen);

		this.$email = new InputComponent(
			'Email Address',
			'email',
			'login-email',
			'email'
		);
		this.$password = new InputComponent(
			'Password',
			'password',
			'login-pwd',
			'password'
		);

		this.$btnSubmit = new ButtonComponent('Sign In', 'submit', [
			'btn',
			'btn-primary',
			'd-block',
			'mt-3',
		]);
	}

	handleChangeScreen = (e) => {
		e.preventDefault();
		// const app = document.getElementById('app');
		const signUp = new RegisterScreen();
		// app.innerHTML = '';
		// app.appendChild(register.render());
		app.changeActiveScreen(signUp);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		let isError = false;

		// console.log('email', email.value, 'password', password.value);
		if (!checkEmail(email.value)) {
			// console.log('Email is Invalid!');
			this.$email.setError(checkEmail(email.value));
			isError = true;
		}
		if (!checkPassword(password.value)) {
			// console.log('Password is Invalid!');
			this.$password.setError(checkPassword(password.value));
			isError = true;
		}
		if (!isError) {
			console.log('Success!');
		}
	};
	render() {
		this.$formLogin.append(
			this.$titleScreen,
			this.$email.render(),
			this.$password.render(),
			this.$btnSubmit.render(),
			this.$link
		);
		this.$container.appendChild(this.$formLogin);
		return this.$container;
	}
}
export default LoginScreen;
