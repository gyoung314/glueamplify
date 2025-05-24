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
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
  
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setSelectedImage(event.target.files[0]);
      }
    };
  }
  
  

  return (
    <main>
      <h1>welcome to grace's cool thing that's really good and better than your thing</h1>
      <img src="assets/purin.png" alt="pompompurin!!!"/>
      <button onClick={ImageUploader}>upload an image!!!</button>
    </main>
  );
}

export default App;
