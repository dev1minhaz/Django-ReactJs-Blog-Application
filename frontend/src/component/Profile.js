import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { domain, header } from '../env';
import { useStateValue } from '../state/provider';

const Profile = () => {
    const [{ profile }, dispatch] = useStateValue();



    document.title = (
        (profile?.user?.first_name) ? (
            (profile?.user?.last_name) ? (
                `${profile?.user?.first_name} ${profile?.user?.last_name}`
            ) : (
                profile?.user?.username
            )
        ) : (
            profile?.user?.username
        )
    )



    let testa = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora!"
    const [firstName, setFirstName] = useState(profile?.user?.first_name);
    const [lastName, setLastName] = useState(profile?.user?.last_name);
    const [email, setEmail] = useState(profile?.user?.email);
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(testa);
    const [instagram, setInstagram] = useState("https://instagram.com/");
    const [facebook, setFacebook] = useState("https://facebook.com/");
    const [twitter, setTwitter] = useState("https://twitter.com/");

    const [reload, setReload] = useState("");
    useEffect(() => {
        const getProfile = async () => {
            await axios({
                method: "get",
                url: `${domain}/profile/`,
                headers: header
            }).then(response => {
                console.log(response.data['userdata']);
                dispatch({
                    type: "ADD_PROFILE",
                    value: response.data['userdata']
                })
            })
        }
        getProfile();
    }, [reload]);
    const userDataUpdate = async () => {
        await axios({
            method: "post",
            url: `${domain}/userdataupdate/`,
            headers: header,
            data: {
                "first_name": firstName,
                "last_name": lastName,
                "email": email
            }
        }).then(response => {
            console.log(response.data);
            setReload(response.data)
            
        })
    }
    const updateImage = async () => {
        let formFile = new FormData()
        formFile.append("image", image);
        await axios({
            method: "post",
            url: `${domain}/profileupdate/`,
            headers: header,
            data: formFile
        }).then(response => {
            setReload(response.data);
        }).catch(_ => {
            alert("Something is wrong!");
        })
    }
    return (
        <div className="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
            <div className="top h-64 w-full bg-blue-600 overflow-hidden relative" >
                <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
                <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                    <img src={`${domain}${profile?.image}`} className="h-24 w-24 object-cover rounded-full" />
                    <h2 className="text-2xl font-semibold">
                        {
                            (profile?.user?.first_name) ? (
                                (profile?.user?.last_name) ? (
                                    `${profile?.user?.first_name} ${profile?.user?.last_name}`
                                ) : (
                                    profile?.user?.username
                                )
                            ) : (
                                profile?.user?.username
                            )
                        }
                    </h2>
                    <h3 className="text-sm font-semibold">{profile?.user?.email}</h3>
                    <h4 className="text-sm font-semibold">Joined Since '{profile?.user?.date_joined}</h4>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white ">
                <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
                    <Link to="/" className="text-sm p-2 bg-indigo-900 text-white text-center rounded font-bold">Basic Information</Link>
                    <Link to="/" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Information</Link>
                    <Link to="/" className="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">Another Something</Link>
                </div>
                <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
                    <div className="px-4 pt-4">
                        <form className="flex flex-col space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold">Basic Information</h3>
                                <hr />
                            </div>
                            <div className="mb-4">
                                <label className="text-xl text-gray-600">Profile Picture</label><br />
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" />
                                <button onClick={updateImage} className="px-4 py-2 bg-warning text-gray-200 inline-flex items-center justify-center mt-3">Upload</button>
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                <div className="form-item w-full">
                                    <label className="text-xl ">First Name</label>
                                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                                </div>
                                <div className="form-item w-full">
                                    <label className="text-xl ">Last Name</label>
                                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

                                <div className="form-item w-full">
                                    <label className="text-xl ">Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold ">More About Me</h3>
                                <hr />
                            </div>
                            <div className="form-item w-full">
                                <label className="text-xl ">Biography</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} value={description} cols="30" rows="10" className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">My Social Media</h3>
                                <hr />
                            </div>
                            <div className="form-item">
                                <label className="text-xl ">Instagram</label>
                                <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                            </div>
                            <div className="form-item">
                                <label className="text-xl ">Facebook</label>
                                <input type="text" value={facebook} onChange={(e) => setFacebook(e.target.value)} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " />
                            </div>
                            <div className="form-item">
                                <label className="text-xl ">Twitter</label>
                                <input type="text" value={twitter} onChange={(e) => setTwitter(e.target.value)} className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  " />
                            </div>
                            <button onClick={userDataUpdate} className="btn btn-primary ">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
