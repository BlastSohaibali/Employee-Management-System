import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const Tasklist = ({ data }) => {
  return (
    <div id='task' className="gap-4 flex overflow-x-auto w-full py-5 rounded-xl">
      {data.tasks.map((task) => {
        if (task.status === "active") {
          return <AcceptTask key={task.id} task={task} />;
        }
        if (task.status === "complete") {
          return <CompleteTask key={task.id} task={task} />;
        }
        if (task.status === "failed") {
          return <FailedTask key={task.id} task={task} />;
        }
        if (task.status === "newTask") {
          return <NewTask key={task.id} task={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default Tasklist;