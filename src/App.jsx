import { useEffect,useState,useRef } from 'react';
import { Posts } from './components/Posts.jsx';

export const App = () => {
  
  return <section className="main-section">
      <Posts />
    </section>
};
// task to understand useRef, useEffect