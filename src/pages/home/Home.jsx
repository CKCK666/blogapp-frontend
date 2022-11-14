import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import { host } from "../../constants";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Loader from "../../components/Loader";
export default function Home() {
  const [loader,setLoader]=useState(false)
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const arrayPosts=[]
  arrayPosts.push(posts)
  useEffect(() => {
    
    const fetchPosts = async () => {
      setLoader(true)
      const res = await axios.get(`${host}/posts` + search);
      setLoader(false)
      setPosts(res.data);
      
     
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
     {loader ? <Loader/> :
     <Posts posts={posts} />
     }
       
       
      </div>
    </>
  );
}
