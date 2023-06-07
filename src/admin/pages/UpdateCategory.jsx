import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { apiEndPoint } from '../../enviroment'
import axios from 'axios';
import SimpleSnackbar from '../../common/Snackbar'
import { useLocation } from 'react-router-dom';

export default function UpdateCategory() {

  const location = useLocation()
  const id = location.pathname.split("/")[3]

  const [category, setCategory] = useState("");
  const [checked, setChecked] = useState(true)
  const [response, setResponse] = useState([])
  const [blogCategory, setBlogCategory] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${apiEndPoint}blog/category/${id}`,
    };

    axios.request(config)
      .then((response) => {
        setBlogCategory(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    if (blogCategory) {
      setCategory(blogCategory.category)
      setChecked(blogCategory.status)
    }
  }, [blogCategory])

  function UpdateCategory(event) {
    event.preventDefault()
    let data = JSON.stringify({
      "category": category,
      "slug": category.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      "status": checked
    });

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: `${apiEndPoint}blog/category/${id}`,
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
        <form onSubmit={UpdateCategory}>
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
                      defaultValue={category?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}
                      readOnly
                    />
                  </div>
                  <div className='col-md-6 mt-3'>
                    <Checkbox
                      checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
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
