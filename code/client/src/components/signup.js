import React from "react";
import "../styles/auth.css";

export default class SignUp extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="form">
                <h2>Регистрация</h2>
                    <form action="#">
                    <div class="input-box">
                        <input type="text" placeholder="Никнэйм" required />
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Пароль" required />
                    </div>
                    <div class="input-box">
                        <input type="password" placeholder="Подтверждение пароля" required />
                    </div>
                    <div class="input-box button">
                        <input type="Submit" value="Зарегистрироваться" />
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