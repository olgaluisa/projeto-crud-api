import { useState } from 'react';

export type TaskType = {
  id: number;
  title: string;
  description: string;
  status: boolean;
};

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [input, setInput] = useState('');
  const [updateInput, setUpdateInput] = useState('');
  const [selectId, setSelectId] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  return <></>;
}

export default App;
