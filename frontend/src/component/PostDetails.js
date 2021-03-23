import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { domain, header } from '../env';
import Footer from './Footer';
import postDetailLoaderHead from '../assests/postDetailLoaderHead.png'
import { Dimmer, Image, Loader, Segment } from 'semantic-ui-react';
import { useStateValue } from '../state/provider';


const PostDetails = () => {
    const [{ profile }, dispatch] = useStateValue();
    console.log(profile);
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const getPostData = async () => {
            await axios({
                method: "get",
                url: `${domain}/api/${id}/`
            }).then(response => {
                setData(response.data);
            })
        }
        getPostData();
    }, [])
    document.title = data?.title;
    const deletePost=async()=>{
        await axios({
            method: "delete",
            url: `${domain}/api/${id}/`,
            headers: header
        }).then(response=>{
            window.location.href = `/`
        }).catch(_=>{
            console.log("Something is wrong");
        })
    }
    return (
        <>
            {
                data !== null ? (
                    <>
                        <div className="max-w-screen-xl mx-auto">

                            <main className="mt-10">

                                <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
                                    <div className="absolute left-0 bottom-0 w-full h-full z-10 my-style-3"
                                    ></div>
                                    <img src={data?.image} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                                    <div className="p-4 absolute bottom-0 left-0 z-20">
                                        <Link to="/" className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Category</Link>
                                        {
                                            profile?.user['id'] === data?.user?.user?.id &&
                                            (
                                                <div>
                                                    <Link to={`/${data?.id}/update/`} className="px-4 py-1 bg-warning text-gray-200 inline-flex items-center justify-center mb-2 mr-2">Edit</Link>
                                                    <Link onClick={deletePost} className="px-4 py-1 bg-danger text-gray-200 inline-flex items-center justify-center mb-2">Delete</Link>
                                                </div>
                                            )
                                        }
                                        
                                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                            {data?.title}
                                        </h2>
                                        <div className="flex mt-3">
                                            <img src={`${domain}${data?.user?.image}`}
                                                className="h-10 w-10 rounded-full mr-2 object-cover mt-2" />
                                            <div>
                                                <span className="font-semibold text-info text-sm">
                                                    {
                                                        (data?.user?.user?.first_name) ? (
                                                            (data?.user?.user?.last_name) ? (
                                                                `${data?.user?.user?.first_name} ${data?.user?.user?.last_name}`
                                                            ) : (
                                                                data?.user?.user.username
                                                            )
                                                        ) : (
                                                            data?.user?.user.username
                                                        )
                                                    }
                                                </span><br />
                                                <span className="text-gray-200 text-xs"> {data?.date} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                                    {data?.description}
                                </div>
                            </main>


                        </div>
                    </>
                ) : (
                    <>
                        <Dimmer active inverted>
                            <Loader size='large' inline='centered'>Loading Post</Loader >
                        </Dimmer >
                    </>
                )
            }
            <Footer />
        </>
    )
}

export default PostDetails;