import { useRef } from 'react';
import { useSocket } from '../store/useSocket';

const Form = () => {
  const { emitSocket } = useSocket();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = inputRef.current?.value;

    if (message) {
      emitSocket('new vote', message);
      inputRef.current!.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>Enviar</button>
    </form>
  );
};
export default Form;
