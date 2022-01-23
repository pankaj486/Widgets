import React, {useState} from "react";





const Form = () => {

    const currentDate = new Date().toDateString()
   
    const [term, setTerm] = useState('');
    const [change, setChange] = useState([]);

    
    const [date, setDate] = useState('');
    const [changeDate, setChangeDate] = useState('');


    const onChangeHandler = (event) => {
        const newValue = event.target.value;
        setTerm(newValue);
    }

    const addItem = () => {
        setChange((prevItem) => {
            return [...prevItem, term];
        })
        setChangeDate(date)
        setTerm("");
        setDate("");
        
    }

    const renderedItem = change.map((item) => {
        return <li>{item}{changeDate}</li>
    })

    return (
        <div className="ui form">
                <div className="field">
                    <label>Enter Todo</label>
                    <input onChange={onChangeHandler} value={term}></input>
                    <br />
                    <br />
                    <input onChange={(e) => setDate(e.target.value)} value={date} type="date"></input>
                    <br />
                    <br />
                    <button onClick={addItem} type="submit" className="ui button primary">Add Todo</button>
                </div>
                <div class="ui card">
                <div class="content">
                    <a class="header">Todo</a>
                    <div class="meta">
                    <span class="date">{currentDate}</span>
                    </div>
                    <div class="description">
                        <ul>
                            {renderedItem}
                        </ul>
                        
                    </div>
                </div>
                </div>
        </div>
    );
}


export default Form;