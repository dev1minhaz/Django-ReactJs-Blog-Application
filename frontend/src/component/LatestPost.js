import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dimmer, Image, Loader, Segment } from 'semantic-ui-react';
import { domain } from '../env';
import latestPostLoader from '../assests/latestPostLoader.png'

const LatestPost = () => {
    const [latestPost, setLatestPost] = useState(null);
    useEffect(() => {
        const getPost = async () => {
            await axios({
                method: 'get',
                url: `${domain}/api/`
            }).then(response => {
                // console.log(response.data.results[0]);
                setLatestPost(response.data.results[0])
            })
        }
        getPost();
    }, []);
    return (
        <>
            {
                latestPost !== null ? (
                    <Link className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block my-style-1" to={`blog/${latestPost?.id}/`}>
                        <div className="absolute left-0 bottom-0 w-full h-full z-10 my-style-2"></div>
                        <img src={`${latestPost?.image}`} className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover" />
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Category</span>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                {latestPost.title}
                            </h2>
                            <div className="flex mt-4">
                                <img src={`${domain}${latestPost?.user?.image}`} className="h-10 w-10 rounded-full mr-2 object-cover mt-2" />
                                <div>
                                    <span className="font-semibold text-gray-200 text-sm">
                                        {
                                            (latestPost?.user?.user?.first_name) && (
                                                (latestPost?.user?.user?.last_name) ? (
                                                    `${latestPost?.user?.user?.first_name} ${latestPost?.user?.user?.last_name}`
                                                ) : (
                                                    latestPost?.user?.user.username
                                                )
                                            )
                                        }
                                    </span> <br />
                                    <span className="font-semibold text-gray-400 text-xs"> {latestPost.date} </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <Segment>
                        <Image src={latestPostLoader} />
                    </Segment>
                )
            }
        </>
    )
}

export default LatestPost
