import { useState } from "react";

let nextId = 4;

const checkValidInput = input => {
  return new RegExp('^(todo|note):{1}(work|personal|random):{1}[a-zA-Z].*').test(input);
};

const Form = ({ setNotes }) => {
  const [input, setInput] = useState('');
  
  const handleSubmit = (input) => {
    if (checkValidInput(input)) {
      addNote(input);
    }
    else {
      alert('Invalid input!');
    }
  };
  
  const addNote = input => {
    const [type, group, content] = input.split(':');

    setNotes(notes => [
      ...notes,
      {
        id: nextId++,
        type,
        group,
        content
      }
    ]);
  };

  return (
    <div className='formPadding'>
      <form className='inputNote' onSubmit={e => {
        e.preventDefault();
        handleSubmit(input);
        setInput('');
      }}>

        <input value={input} onChange={e => {
          setInput(e.target.value);
        }} placeholder='type:group:content' />
        <button className='separator'>Add note</button>
      </form>
    </div>
  );
};

export default Form;