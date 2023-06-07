import React, { useEffect, useState } from 'react'
import { CKEditor } from 'ckeditor4-react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { apiEndPoint } from '../../enviroment'
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SimpleSnackbar from '../../common/Snackbar'
import { useLocation } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function UpdateBlog() {

    const location = useLocation()
    const id = location.pathname.split("/")[3]

    const [blogPost, setBlogPost] = useState([])
    const [cate, setAllCate] = React.useState([])
    const [checked, setChecked] = useState(null)
    const [content, setContent] = React.useState("")

    const [uploadImage, setUploadImage] = useState('')
    const [fileInfo, setFileInfo] = useState('')
    const [response, setResponse] = useState([])

    React.useEffect(() => {
        function getBlogPost() {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${apiEndPoint}blog/id/${id}`,
            };

            axios.request(config)
                .then((response) => {
                    setBlogPost(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        getBlogPost()
    }, [])

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog/category`,
        };

        axios.request(config)
            .then((response) => {
                setAllCate(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    const [userData, setUserData] = useState({
        title: "",
        description: "",
        author: "",
        status: Boolean,
        createAt: "",
        slug: "",
        images: "",
        category: "",
    })

    useEffect(() => {
        if (blogPost) {
            setUserData({
                title: blogPost.title,
                description: blogPost.description,
                author: blogPost.author,
                status: blogPost.status,
                createdAt: blogPost.createdAt,
                slug: blogPost.slug,
                images: blogPost.images,
                category: blogPost.category,
            })
        }
    }, [blogPost])

    const getUserData = (event) => {
        const { name, value } = event.target
        setUserData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const getImage = (e) => {
        setUploadImage(URL.createObjectURL(e.target.files[0]));
        setFileInfo(e.target.files[0]);
    };

    function updateValue(event) {
        event.preventDefault()
        let data = new FormData();

        data.append('images', fileInfo ? fileInfo : userData.images);
        data.append('title', userData.title);
        data.append('description', content ? content : userData.description);
        data.append('slug', userData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
        data.append('status', checked ? checked : userData.status);
        data.append('category', userData.category);
        data.append('author', userData.author);

        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog/${id}`,
            headers: {
                'Content-Type': 'multipart/form-date'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                setResponse(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <SimpleSnackbar res={response.message} />
            {
                userData.description || userData.status ?

                    <div className="container rounded bg-white mt-5 mb-5">
                        <form onSubmit={updateValue}>
                            <div className="row">
                                <div className="col-md-12 border-right">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">Update Blog</h4>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-md-6">
                                                <label className="h6">Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    name='title'
                                                    onChange={getUserData}
                                                    value={userData.title}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="h6">Slug</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Slug"
                                                    name='slug'
                                                    onChange={getUserData}
                                                    value={userData.title?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
                                                />    
                                            </div>
                                            <div className="col-md-6 mt-5">
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Category"
                                                            onChange={getUserData}
                                                            value={userData.category}
                                                            name="category"
                                                        >
                                                            {
                                                                cate.map((val) => {
                                                                    return (
                                                                        <MenuItem key={val._id} value={val._id}>{val.category}</MenuItem>
                                                                    )
                                                                })
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </div>
                                            <div className="col-md-6 mt-4">
                                                <label className="h6">Author Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Author Name"
                                                    name='author'
                                                    onChange={getUserData}
                                                    value={userData.author}
                                                />
                                            </div>
                                            {
                                                userData.description ? <div className='col-md-12 mt-5'>
                                                    <CKEditor
                                                        initData={userData?.description}
                                                        onChange={(evt) => {
                                                            setContent(evt.editor.getData());
                                                        }}
                                                        id={"ck-editor-text"}
                                                        onReady={editor => { console.log('Editor is ready to use!', editor) }}
                                                        config={{
                                                            allowedContent: true,
                                                            fullPage: true
                                                        }}
                                                    />
                                                </div> :
                                                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                                                        <div className="container rounded bg-white mt-5 mb-5 text-center">
                                                            <CircularProgress color="success" />
                                                        </div>
                                                    </Stack>
                                            }

                                            <div className='col-md-6'>
                                                <div className="avatar-upload">
                                                    <div className="avatar-edit">
                                                        <input
                                                            onChange={getImage}
                                                            type="file"
                                                            id="imageUpload"
                                                            accept=".png, .jpg, .jpeg"
                                                        />
                                                        <label htmlFor="imageUpload"></label>
                                                    </div>
                                                    <div className="avatar-preview">
                                                        <div
                                                            id="imagePreview"
                                                            style={{ backgroundImage: `url(${uploadImage ? uploadImage : userData.images})` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                userData.status === true ?

                                                    <div className='col-md-6 mt-5 pt-5'>
                                                        <Checkbox
                                                            defaultChecked={true}
                                                            onChange={(event) => setChecked(event.target.checked)}
                                                            name="status"
                                                        />
                                                        <label>Status</label>
                                                    </div>

                                                    :

                                                    <div className='col-md-6 mt-5 pt-5'>
                                                        <Checkbox
                                                            defaultChecked={false}
                                                            onChange={(event) => setChecked(event.target.checked)}
                                                            name="status"
                                                        />
                                                        <label>Status</label>
                                                    </div>
                                            }

                                        </div>
                                    </div>
                                    <div className="text-center mb-5">
                                        <Button type="submit" variant="contained">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    : <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <div className="container rounded bg-white mt-5 mb-5 text-center">
                            <CircularProgress color="success" />
                        </div>
                    </Stack>
            }
        </>
    )
}
