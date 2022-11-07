import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import { host } from "../../constants";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const arrayPosts=[]
  arrayPosts.push(posts)
  useEffect(() => {
    
    const fetchPosts = async () => {
      const res = await axios.get(`${host}/posts` + search);
      
      setPosts(res.data);
     
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
     
        <Posts posts={posts} />
       
      </div>
    </>
  );
}
