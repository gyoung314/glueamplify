import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function ImageUploader() {
    const [image, setImage] = useState(null);
  
    const handleChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleChange} />
        {image && <p>Selected: {image.name}</p>}
      </div>
    );
  }
  

  return (
    <main>
      <h1>welcome to grace's cool thing that's really good and better than your thing</h1>
      <button onClick={ImageUploader}>upload an image!!!</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
