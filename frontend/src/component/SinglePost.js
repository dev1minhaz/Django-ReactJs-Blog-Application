import React from 'react'
import { Link } from 'react-router-dom'
import { domain } from '../env'

const SinglePost = ({ data }) => {
    return (
        <div className="block rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 mt-6" style={{ backgroundImage: `url(${data.image})` }} title="deit is very important"></div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div className="">
                    <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                        <Link to={`blog/${data.id}/`}>{data?.title}</Link>
                    </div>
                    <p className="text-gray-700 text-base">
                        {(data.description).substring(0, 200)}... <Link to={`blog/${data.id}/`}> Read more</Link>
                    </p>
                </div>
                <div className="flex">
                    <img src={`${domain}${data.user.image}`} className="h-10 w-10 rounded-full mr-2 object-cover mt-2" />
                    <div>
                        <span className="font-semibold text-gray-700 text-sm">
                            {
                                (data?.user?.user?.first_name) && (
                                    (data?.user?.user?.last_name) ? (
                                        `${data?.user?.user?.first_name} ${data?.user?.user?.last_name}`
                                    ) : (
                                        data?.user?.user.username
                                    )
                                )
                            } </span><br />
                        <span className="text-gray-600 text-xs"> {data.date} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
