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
                            <input type="text" placeholder="Название раздела" onChange={e => this.setState({title: e.target.value})} required />
                        </div>
                        <div class="input-box note-text">
                            <textarea placeholder="Описание" onChange={e => this.setState({description: e.target.value})}/>
                        </div>
                        <div class="input-box button"                              
                             onClick={() => this.props.save({
                                title: this.state.title,
                                description: this.state.description
                             })}>
                            <input type="button" value="Добавить раздел" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}