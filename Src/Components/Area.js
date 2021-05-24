import React, {useState} from 'react';
import './Style.css';


function Area(props)
{
    const [note, setnote]=useState({
        title: "",
        content: ""
    })
    function handleChange(event) {
        const{name, value}= event.target;
        setnote(prevnote => {
            return{
                ...prevnote,
                [name]:value
            };
        })
    }
    function submitChange(event) {
        props.onadd(note);
        event.preventDefault();
    }
    return(
        <div className="Area">
        <form>
            <input type="text" name="title" onChange={handleChange} value={note.title} placeholder="Title"  />
            <textarea type="text" name="content" onChange={handleChange} value={note.content} placeholder="Type here" rows="2" />
            <button onClick={submitChange}>Add</button>
        </form> 
        </div>
    );
}

export default Area;