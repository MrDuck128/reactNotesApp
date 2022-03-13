const Note = ({ note }) => {
  const { type, group, content } = note;

  return (
    <div className="note">
      <div className="capitalize">
        {type} | {group}
      </div>
      <div>
        {content}
      </div>
    </div>
  );
};

const NoteDisplay = ({ notes, type, group }) => {
  notes = notes.filter(note => (type === "all" || ((type === note.type) && (group === note.group))));

  return (
    <div className="form">
      {notes.map((note, index) => <Note key={index} note={note} />)}
    </div>
  );
};

export default NoteDisplay;