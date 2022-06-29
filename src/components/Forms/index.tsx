import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Forms extends React.Component {
  state = {
    task: "",
    time: "00:00"
  }

  saveTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.saveTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor='task'>
            add a new study
          </label>
          <input
            type='text'
            name='task'
            id='task'
            value={this.state.task}
            onChange={evento => this.setState({ ...this.state, task: evento.target.value })}
            placeholder='what do you want to study?'
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor='time'>
          time
          </label>
          <input
            type='time'
            step='1'
            name='time'
            value={this.state.time}
            onChange={evento => this.setState({ ...this.state, time: evento.target.value })}
            id='time'
            min='00:00'
            max='01:30:00'
            required
          />
        </div>
        <Button>
          Add to
        </Button>
      </form>
    );
  };
};

export default Forms;