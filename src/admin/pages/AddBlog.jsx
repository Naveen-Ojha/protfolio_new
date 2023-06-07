import React from 'react'
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

export default function AddBlog() {
    const [content, setContent] = React.useState("")
    const [uploadImage, setUploadImage] = React.useState('')
    const [fileInfo, setFileInfo] = React.useState('')
    const [response, setResponse] = React.useState([])

    const getImage = (e) => {
        setUploadImage(URL.createObjectURL(e.target.files[0]));
        setFileInfo(e.target.files[0]);
    };

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [title, setTitle] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    const [cate, setAllCate] = React.useState([])

    const [category, setCategory] = React.useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    React.useEffect(() => {
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

    const addBlog = (event) => {
        event.preventDefault()
        let data = new FormData();

        data.append('images', fileInfo);
        data.append('title', title);
        data.append('description', content);
        data.append('slug', slug);
        data.append('status', checked);
        data.append('category', category);
        data.append('author', author);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog`,
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
            <div className="container rounded bg-white mt-5 mb-5">
                <form onSubmit={addBlog}>
                    <div className="row">
                        <div className="col-md-12 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Add Blog</h4>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="h6">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            name='title'
                                            onChange={(event) => setTitle(event.target.value)}
                                            value={title}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="h6">Slug</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Slug"
                                            name='slug'
                                            defaultValue={title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
                                            readOnly
                                        />
                                    </div>
                                    <div className="col-md-6 mt-5">
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={category}
                                                    label="Category"
                                                    onChange={handleCategory}
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
                                            onChange={(event) => setAuthor(event.target.value)}
                                            value={author}
                                        />
                                    </div>
                                    <div className='col-md-12 mt-5'>
                                        <CKEditor
                                            data={content}
                                            onChange={(evt) => {
                                                setContent(evt.editor.getData());
                                            }}
                                            config={{
                                                allowedContent: true,
                                                fullPage: true
                                            }}
                                            
                                        />
                                    </div>
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
                                                    style={{ backgroundImage: `url(${uploadImage ? uploadImage : "https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6"})` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mt-5 pt-5'>
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <label>Status</label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mb-5">
                                <Button type="submit" variant="contained">Submit</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
