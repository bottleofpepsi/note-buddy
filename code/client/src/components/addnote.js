import React from "react";
import "../styles/auth.css";
import { PiNoteDuotone } from "react-icons/pi";

export default class AddNote extends React.Component {
    getCurrDate = () => {
        const date = new Date();
        return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    }
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
                        <div class="input-box date" id="date">
                            <input type="date" placeholder="Дэдлайн" min={this.getCurrDate} />
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