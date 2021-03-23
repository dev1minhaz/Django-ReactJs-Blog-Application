import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { domain, header } from '../env';

const UpdatePost = () => {
    const {id}=useParams();
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const history=useHistory();
    useEffect(() => {
        const getPostData = async () => {
            await axios({
                method: "get",
                url: `${domain}/api/${id}/`,
                headers: header
            }).then(response => {
                setTitle(response?.data?.title)
                
                setDescription(response?.data?.description)
                
                setImage(response?.data?.image)
                
            }).catch(_=>{
                alert("Something is wrong")
            })
        }
        getPostData();
    }, [])
    document.title = title
    const updatePost = async () => {
        let formfield = new FormData();
        formfield.append("title", title)
        formfield.append("description", description);
        if (image1!==null){
            formfield.append("image", image1)
        }
        await axios({
            method: "patch",
            url: `${domain}/api/${id}/`,
            data: formfield,
            headers: header
        }).then(response=>{
            console.log(response.data)
            window.location.href = `/blog/${id}/`
        })
    }
    return (
        <div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form>
                                <div className="mb-4">
                                    <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label><br />
                                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="border-2 border-gray-300 p-2 w-full" id="title" required />
                                </div>

                                <div className="mb-4">
                                    <img src={image} />
                                    <label className="text-xl text-gray-600">Image<span className="text-red-500">*</span></label><br />
                                    <input onChange={(e) => setImage1(e.target.files[0])} type="file" className="form-control" />
                                </div>

                                <div className="mb-8">
                                    <label className="text-xl text-gray-600">Description <span className="text-red-500">*</span></label><br />
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="7" cols="60" className="border-2 border-gray-500"></textarea>
                                </div>
                                <button type="button" onClick={updatePost} className="p-3 bg-blue-500 text-white hover:bg-blue-400">Post</button>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )

}

export default UpdatePost
