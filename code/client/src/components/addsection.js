import React from "react";
import "../styles/forms.css";
import { PiNotepad } from "react-icons/pi";

export default class AddSection extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <div class="form">
                    <div class="icon-wrapper">
                        <h2>Новый раздел</h2>
                        <PiNotepad className="icon"/>
                    </div>
                    <form action="#">
                        <div class="input-box note-name">
                            <input type="text" placeholder="Название раздела" required />
                        </div>
                        <div class="input-box note-text">
                            <textarea placeholder="Описание" />
                        </div>
                        <div class="input-box button">
                            <input type="button" value="Добавить раздел" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}