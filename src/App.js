import { useState } from 'react';
import Form from './components/Form';
import NoteDisplay from './components/NoteDisplay';
import Select from './components/Select';
import { notesList } from './notes';

const App = () => {
  const [notes, setNotes] = useState(notesList);
  const [type, setType] = useState('all');
  const [group, setGroup] = useState('work');

  return (
    <div className='page'>
      <Select type={type} setType={setType} group={group} setGroup={setGroup} />
      <Form notes={notes} setNotes={setNotes} />
      <NoteDisplay notes={notes} type={type} group={group} />
    </div>
  );
};

export default App;