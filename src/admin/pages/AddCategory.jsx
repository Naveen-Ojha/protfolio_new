import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { apiEndPoint } from '../../enviroment'
import axios from 'axios';
import SimpleSnackbar from '../../common/Snackbar'

export default function AddCategory() {
    const [category, setCategory] = React.useState("");
    const [checked, setChecked] = React.useState(true)
    const [response, setResponse] = React.useState([])

    function addCategory(event) {
        event.preventDefault();
        let data = JSON.stringify({
            "category": category,
            "slug": category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            "status": checked
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${apiEndPoint}blog/category`,
            headers: {
                'Content-Type': 'application/json'
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
                <form onSubmit={addCategory}>
                    <div className="row">
                        <div className="col-md-12 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Add Category</h4>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <label className="h6">Category Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Category Name"
                                            name='category'
                                            onChange={(event) => setCategory(event.target.value)}
                                            value={category}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="h6">Category Slug</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Category Slug"
                                            name='category'
                                            value={category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
                                            readOnly
                                        />
                                    </div>
                                    <div className='col-md-6 mt-3'>
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <label>Status</label>
                                    </div>
                                    <div className="text-center mb-5">
                                        <Button type="submit" variant="contained">Update</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
