import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import { domain } from '../env';
import SinglePost from './SinglePost';
import SinglePostLoader from '../assests/SinglePostLoader.png';

const Posts = () => {
    const [post, setPost] = useState(null);
    const [latestPost, setLatestPost] = useState(null);
    useEffect(() => {
        const getPost = async () => {
            await axios({
                method: 'get',
                url: `${domain}/api/`
            }).then(response => {
                // console.log(response.data.results);
                setPost(response.data)
            })
        }
        getPost();
    }, []);
    const nextpage = async () => {
        await axios({
            method: "get",
            url: post?.next
        }).then(res => {
            setPost(res.data)
        })
    }
    const previous = async () => {
        await axios({
            method: "get",
            url: post?.previous
        }).then(res => {
            setPost(res.data)
        })
    }
    return (
        <div className="w-full lg:w-2/3">
            {
                post !== null ? (
                    <>
                        {
                            post?.results.map((data, i) => (
                                <SinglePost key={i} data={data} />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <Image src={SinglePostLoader} /> <br /><br />
                        <Image src={SinglePostLoader} /> <br /> <br />
                        <Image src={SinglePostLoader} /> <br /> <br />
                        <Image src={SinglePostLoader} /> <br /> <br />
                        <Image src={SinglePostLoader} /> <br /> <br />
                    </>
                )
            }
            <div className="d-flex ">
                <div className="">
                    {
                        post?.previous !== null ?
                            <button onClick={previous} className="btn btn-lg btn-success"><i className="fas fa-backward"></i> Previous</button>
                            :
                            <button className="btn btn-lg btn-success" disabled> <i className="fas fa-backward"></i> Previous</button>
                    }
                </div>
                <div className="">
                    {
                        post?.next !== null ?
                            <button onClick={nextpage} className="btn btn-lg btn-danger">Next <i className="fas fa-forward"></i></button>
                            :
                            <button className="btn btn-lg btn-danger" disabled>Next <i className="fas fa-forward"></i></button>
                    }
                </div>
            </div>
        </div >
    )
}

export default Posts
