import React, { useState } from 'react';
import Layout from './Components/Layout/Layout'; 
import Editor from './Components/Editor';
import Preview from './Components/Preview';
import './App.css';


function App() {
  const [markdownValue,setMarkdownValue]= useState(`# Hi everyone
  ## Your markdown preview will show up here
  [freeCodeCamp](https://www.freecodecamp.org/)
  Front End Libraries Projects
  - Random Quote Machine
  - Markdown Previewer
  - Drum Machine
  - Javascript Calculator
  - Pomodoro Clock
 `);
  return (
    <div className="App">
        <h1 className="App-header">freeCodeCamp Front end Libraries Challenge</h1>
        <main className="App-content">
          <Layout title="Editor">
            <Editor
              onChange={ e=> setMarkdownValue(e.target.value)}
              markdownValue={markdownValue}
            />
          </Layout>
          <Layout title="Preview">
            <Preview markdownValue={markdownValue} />
          </Layout>
        </main>
      </div>
     );
  }
 


export default App;
