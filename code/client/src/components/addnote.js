import React from "react";
import "../styles/auth.css";
import { PiNoteDuotone } from "react-icons/pi";

export default class AddNote extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="form">
                    <div class="icon-wrapper">
                        <h2>Новая заметка</h2>
                        <PiNoteDuotone className="icon"/>
                    </div>
                    <form action="#">
                        <div class="input-box note-name">
                            <input type="text" placeholder="Название заметки" required />
                        </div>
                        <div class="input-box note-text">
                            <textarea placeholder="Текст" required />
                        </div>
                        <div class="input-box date">
                            <input type="date" placeholder="Дэдлайн" min="2023-12-01" />
                        </div>
                        <div class="input-box button">
                            <input type="button" value="Добавить заметку" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}