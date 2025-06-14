import { useState } from 'react';

export type ListType = {
  id: number;
  title: string;
  status: boolean;
};

function App() {
  const [list, setList] = useState<ListType[]>([]);
  const [input, setInput] = useState('');
  const [updateInput, setUpdateInput] = useState('');
  const [selectId, setSelectId] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  return <></>;
}

export default App;
