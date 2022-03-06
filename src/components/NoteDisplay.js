const NoteDisplay = ({ notes, type, group }) => {
  return (
    <div className="form">
      {notes.map((note, index) => {
        if (type === "all" || ((type === note.type) && (group === note.group))) {
          return <Note key={index} note={note} />;
        }
        else {
          return;
        }
      })
      }
    </div>
  );
};

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

export default NoteDisplay;