import { ITask } from '../../types/tasks';
import Item from './Item';
import style from './List.module.scss';


function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2> daily study </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item 
          key={index}
          {...item}
          />
        ))}
      </ul>
    </aside>
  );
};

export default List;