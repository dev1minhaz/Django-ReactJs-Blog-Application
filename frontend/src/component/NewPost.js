import axios from 'axios';
import React, { useState } from 'react'
import { domain, header } from '../env';

const NewPost = () => {
    document.title = 'Create Post'
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);

    const addNewPost = async () => {
        let formfield = new FormData();
        formfield.append("title", title)
        formfield.append("description", description);
        if (image !== null) {
            formfield.append("image", image)
        }
        await axios({
            method: "post",
            url: `${domain}/api/`,
            data: formfield,
            headers: header
        }).then(response => {
            window.location.href = "/"
        }).catch(_ => {
            alert("Something is wrong!");
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
                                    <label className="text-xl text-gray-600">Image<span className="text-red-500">*</span></label><br />
                                    <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" />
                                </div>

                                <div className="mb-8">
                                    <label className="text-xl text-gray-600">Description <span className="text-red-500">*</span></label><br />
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="7" cols="60" className="border-2 border-gray-500"></textarea>
                                </div>
                                <button type="button" onClick={addNewPost} className="p-3 bg-blue-500 text-white hover:bg-blue-400">Post</button>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </div >
        // <div className="container">
        //     <div class="form-group">
        //         <label >Title</label>
        //         <input onChange={(e) => setTitle(e.target.value)} type="text" class="form-control" placeholder="Post title" />
        //     </div>
        //     <div class="form-group">
        //         <label >Description</label>
        //         <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Description" class="form-control" rows="3"></textarea>
        //     </div>
        //     <div class="form-group">
        //         <label >Image</label>
        //         <input onChange={(e) => setImage(e.target.files[0])} type="file" class="form-control" />
        //     </div>
        //     <p onClick={addNewPost} className="btn btn-info">New Post</p>
        // </div>
    )
}

export default NewPost
