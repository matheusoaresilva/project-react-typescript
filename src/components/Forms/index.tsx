import React from 'react';
import Button from '../Button';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor='task'>
            add a new study
          </label>
          <input
            type='text'
            name='task'
            id='task'
            placeholder='what do you want to study?'
            required
          />
        </div>
        <div>
          <label htmlFor='time'>
          time
          </label>
          <input
            type='time'
            step='1'
            name='time'
            id='time'
            min='00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button />
      </form>
    );
  };
};

export default Forms;