import { useEffect, useState } from 'react';

export default function App() {
  const [msg, updateMsg] = useState<string | undefined>();

  useEffect(() => {
    async function fetchMessage() {
      const res = await fetch('api/');
      const rcvMsg = await res.text();

      updateMsg(rcvMsg);
    }
    fetchMessage();
  }, []);

  return (
    <h1 className="text-3xl font-bold underline">
      {msg ?? 'Nothing yet'}
    </h1>
  );
}
