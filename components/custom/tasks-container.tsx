import { useTaskStore } from "@/hooks/useTaskStore";
import { useEffect } from 'react' 
import TaskCard from "@/components/custom/task-card";

export const TasksContainer = () => {
  const { tasks, loading, fetchTasks } = useTaskStore();

  useEffect(() => {
    if (tasks.length === 0) fetchTasks();
  }, [tasks.length, fetchTasks]);

  return(
    <div className="
      flex 
      flex-col 
      border-[#333333] 
      border-t 
      rounded-xl 
      my-6 
      text-white 
      justify-center 
      items-center
    ">
      {loading ? (
        <p>Loading...</p>
      ) : tasks.length === 0 ? (
        <>
          <img src="Clipboard.svg" alt="an icon representing a clipboard" className="pt-10 pb-4"/>
          <p className="text-customGray font-bold">You don't have any tasks registered yet.</p>
          <p className="text-customGray pt-4">Create tasks and organize your to-do items</p>
        </>
      ) : (
        tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
          />
        ))
      )}
    </div>
  )
}