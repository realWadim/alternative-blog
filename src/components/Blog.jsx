import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPost, fetchPosts, selectPosts, setPosts} from "./blogSlice";

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


                        <div>
                            {/*<button onClick={() => dispatch(addPost(posts.length))}>Add</button>*/}
                            {/*<button onClick={() => dispatch(setPosts([]))}>Reset</button>*/}
                            {
                                posts.map(post => <div key={post.id}>
                                    <h3>{post.title}</h3>
                                    <h5>{post.content}</h5>
                                </div>)
                            }
                        </div>

                </div>
            </div>
        </div>
    );
}

export default Blog;
