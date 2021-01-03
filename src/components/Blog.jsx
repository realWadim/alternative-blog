import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchPosts, selectPosts} from "./blogSlice";
import './blog.css'

function Blog() {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    console.log(posts)
    return (
        <div className="blog">
            <div class="container">
                <div class="row align-items-center my-5">


                        <div class="blog-content-container">
                            {
                                posts.map(post =><div class="blog-post"> <div key={post.id}>
                                    <img
                                        className="img-fluid rounded mb-4 mb-lg-0"
                                        src={post.image}
                                        alt=""
                                    />
                                    <h3 class="blog-post-title">{post.title}</h3>
                                    <h5>{post.content}</h5> </div>
                                </div>)
                            }
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Blog;
