import React from "react";
import "../styles/forms.css";

export default class SignUp extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="form">
                <h2>Регистрация</h2>
                    <form action="#">
                        <div class="input-box">
                            <input type="email" placeholder="Email" maxLength="30" required />
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder="Никнэйм" maxLength="30" required />
                        </div>
                        <div class="input-box">
                            <input type="password" minlength="4" maxlength="12" placeholder="Пароль" required />
                        </div>
                        <div class="input-box">
                            <input type="password" minlength="4" maxlength="12" placeholder="Подтверждение пароля" required />
                        </div>
                        <div class="input-box button">
                            <input type="button" value="Зарегистрироваться" />
                        </div>
                        <div class="text">
                            <h3>Уже есть аккаунт? <a href="#">Вход</a></h3>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}