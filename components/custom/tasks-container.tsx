import { useTaskStore } from "@/hooks/useTaskStore";
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'; 
import TaskCard from "@/components/custom/task-card";

export const TasksContainer = () => {
  const { tasks, loading, fetchTasks } = useTaskStore();
  const router = useRouter();

  useEffect(() => {
    if (tasks.length === 0) fetchTasks();
  }, [tasks.length, fetchTasks]);

  const handleTaskClick = (taskId: string) => {
    router.push(`/${taskId}`); 
  };

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
          <p>You don't have any tasks registered yet.</p>
          <p>Create tasks and organize your to-do items</p>
        </>
      ) : (
        tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onClick={() => handleTaskClick(task.id)} 
          />
        ))
      )}
    </div>
  )
}