const Select = ({ setType, setGroup }) => {

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangeGroup = (e) => {
    setGroup(e.target.value);
  };

  return (
    <div className='selectPadding'>
      <div className='selectGroup'>
        <input type='radio' 
          value='all' 
          name='type' 
          onChange={handleChangeType} 
        /> All<br></br>
        <input type='radio' 
          value='todo' 
          name='type' 
          onChange={handleChangeType} 
        /> Todo<br></br>
        <input type='radio' 
          value='note' 
          name='type' 
          onChange={handleChangeType} 
        /> Note
      </div>
      
      <div className='selectGroup'>
        <input type='radio' value='work' name='group' onChange={handleChangeGroup} /> Work<br></br>
        <input type='radio' value='personal' name='group' onChange={handleChangeGroup} /> Personal<br></br>
        <input type='radio' value='random' name='group' onChange={handleChangeGroup} /> Random
      </div> 
    </div>
  );
};

export default Select;