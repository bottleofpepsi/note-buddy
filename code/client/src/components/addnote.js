import React from "react";
import "../styles/forms.css";
import { PiNoteDuotone } from "react-icons/pi";

export default class    AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            deadline: ""
        }
        this.requiredFormatDate = this.requiredFormatDate.bind(this)
    }
    
    requiredFormatDate(date){
        return date.split("-").reverse().join("-");
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
                            <input type="text" placeholder="Название заметки" onChange={e => this.setState({title: e.target.value})} required />
                        </div>
                        <div class="input-box note-text">
                            <textarea placeholder="Текст" onChange={e => this.setState({description: e.target.value})} required />
                        </div>
                        <div class="input-box date" onChange={e => this.setState({deadline: this.requiredFormatDate(e.target.value)})} id="date">
                            <input type="date" placeholder="Дэдлайн" />
                        </div>
                        <div class="input-box button" 
                             onClick={() => this.props.save({
                                title: this.state.title,
                                description: this.state.description,
                                deadline: this.state.deadline
                            })}
                        >
                            <input type="button" value="Добавить заметку" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}