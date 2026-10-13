import { deletePost, getPost, postData } from "../api/PostApi.jsx";
import { useEffect, useState } from "react";
import "../App.css";
import { Form } from "./Form.jsx";

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
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost)=> {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <section className="section-form">
      <Form data={data} setData={setData} />
    </section>
  <section className= "section-post">
    <ol>
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
  </>
  );
};