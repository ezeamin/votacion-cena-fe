// import { useEffect, useState } from 'react';

// import { useSocket } from '../store/useSocket';

// const Messages = () => {
//   const { onSocket } = useSocket();

//   const [messages, setMessages] = useState<string[]>([]);

//   useEffect(() => {
//     onSocket('chat message', (msg: string) => {
//       console.log('a');
//       setMessages((messages) => [...messages, msg]);
//     });
//   }, [onSocket, setMessages]);

//   return (
//     <ul>
//       {messages.map((msg, i) => (
//         <li key={i}>{msg}</li>
//       ))}
//     </ul>
//   );
// };
// export default Messages;
