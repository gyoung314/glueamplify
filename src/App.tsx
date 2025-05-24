import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import React from "react";

const client = generateClient<Schema>();

function App() {



  function ImageUploader() {
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  
    const handleClick = () => {
      fileInputRef.current?.click();
    };
  
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        console.log(event.target.files[0]);
      }
    };
  
    return (
      <>
        <button type="button" onClick={handleClick}>
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </>
    );
  }
  
  
  
  return (
    <main>
      <h1>i can read your mind and/or drink your blood</h1>
      <img src="assets/purin.png" alt="pompompurin!!!"/>
      <ImageUploader />
    </main>
  );
}


export default App;
