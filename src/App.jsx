import { getPost } from "./api/PostApi.jsx";


export const App = () => {
  console.log(getPost());
  return (
    <div>
      <h1>React Axios Example</h1>
      <p>This is a simple example of using Axios in a React application.</p>
    </div>
  );

};