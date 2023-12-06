import React from "react";
import "../styles/auth.css";

export default class LogIn extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="form">
                    <h2>Вход</h2>
                    <form action="#">
                        <div class="input-box">
                            <input type="text" placeholder="Никнэйм" required />
                        </div>
                        <div class="input-box">
                            <input type="password" placeholder="Пароль" required />
                        </div>
                        <div class="input-box button">
                            <input type="Submit" value="Войти" />
                        </div>
                        <div class="text">
                            <h3>Впервые тут? <a href="#">Регистрация</a></h3>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}