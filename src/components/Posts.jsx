import { getPost } from "../api/PostApi.jsx";
import { useEffect, useState } from "react";
import "../App.css";

export const Posts = () => {

    const [data, setData] = useState([]);

    const getPostData = async() => {
    const res = await getPost();
    setData(res.data);
    console.log(res);
  }

  useEffect(() => {
    getPostData();
  }, []);

  //function to delete the post 
  const handleDeletePost =(id) => {
    
  }

  return <section className= "section-post">
    <ol
    >
        {
            data.map((curElem) => {
               const {id, body, title } = curElem;
               return <li key={id}>
                <p>Title: {title} </p>
                 <p> Body:{body} </p>
                 <button>Edit</button>
                 <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
               </li>
            })
        }
    </ol>

  </section>
};