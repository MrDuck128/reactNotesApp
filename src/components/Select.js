const Select = ({ type, setType, group, setGroup }) => (
  <div className='selectPadding'>
    <div className='selectGroup' onChange={e => setType(e.target.value)}>
      <label className="selectGroupLabel">
        <input type='radio' value='all' name='type' defaultChecked={type === 'all'} />
        All
      </label>
      <label className="selectGroupLabel">
        <input type='radio' value='todo' name='type' defaultChecked={type === 'todo'} />
        Todo
      </label>
      <label className="selectGroupLabel">
        <input type='radio' value='note' name='type' defaultChecked={type === 'note'} />
        Note
      </label>
    </div>
    
    {type !== 'all' &&
    <div className='selectGroup' onChange={e => setGroup(e.target.value)}>
      <label className="selectGroupLabel">
        <input type='radio' value='work' name='group' defaultChecked={group === 'work'} />
        Work
      </label>
      <label className="selectGroupLabel">
        <input type='radio' value='personal' name='group' defaultChecked={group === 'personal'} />
        Personal
      </label>
      <label className="selectGroupLabel">
        <input type='radio' value='random' name='group' defaultChecked={group === 'random'} />
        Random
      </label>
    </div>}
  </div>
);

export default Select;