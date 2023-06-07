import React, { useState, useEffect } from 'react'
import { apiEndPoint } from '../../enviroment';
import axios from 'axios';
import { useLocation } from 'react-router-dom'
import Select from 'react-select';
import moment from "moment";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function AstroDetails() {

    const location = useLocation()
    const id = location.pathname.split('/')[3]

    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        var config = {
            method: "GET",
            url: `${apiEndPoint}astro?id=${id}`,
        };
        axios(config)
            .then((result) => {
                setProfileData(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line
    }, [id]);

    const [state, setstate] = useState({
        primaryskills: [],
        skills: [],
        language: []
    })

    const { profileImage, astrologerName, contactNumber, email, gender, birthdate, primarySkills, skill, language, exp, hours, isPlatform, monthlyEarning, nameOfPlatform, onBoard, interviewTime, cityName, incomeSource, chatRate, callRate, description } = profileData;


    useEffect(() => {
        if ((primarySkills !== undefined) && (skill !== undefined) && (language !== undefined)) {
            setstate({
                primaryskills: profileData.primarySkills,
                skills: profileData.skill,
                language: profileData.language,
            })
        }
    })


    const ps = state.primaryskills.map((val, i) => {
        return { value: i + 1, label: val }
    })

    const sk = state.skills.map((val, i) => {
        return { value: i + 1, label: val }
    })

    const lang = state.language.map((val, i) => {
        return { value: i + 1, label: val }
    })

    return (
        <>
            {
                ps.length && sk.length && lang.length ?
                    <div className="container rounded bg-white mt-5 mb-5">
                        <form>
                            <div className="row">
                                <div className="col-md-3 border-right">
                                    <div className="avatar-upload">
                                        <div className="avatar-edit">
                                            <input
                                                type="file"
                                                id="imageUpload"
                                                accept=".png, .jpg, .jpeg"
                                            />
                                            {/* <label htmlFor="imageUpload"></label> */}
                                        </div>
                                        <div className="avatar-preview">
                                            <div
                                                id="imagePreview"
                                                style={{ backgroundImage: `url(${profileImage ? profileImage : ""})` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 border-right">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">Profile Settings</h4>
                                        </div>
                                        <h5 className="my-4">Basic Details</h5>

                                        <div className="row mt-2">
                                            <div className="col-md-12">
                                                <label className="labels">Contact Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Contact Number"
                                                    defaultValue={contactNumber}
                                                    name='contactNumber'
                                                    readOnly
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="labels">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    defaultValue={email}
                                                    name='email'
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <label className="labels">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    defaultValue={astrologerName}
                                                    name='name'
                                                    readOnly
                                                />
                                            </div>
                                            <h5 className="my-4">Personal Details</h5>

                                            <div className="form-group">
                                                <label htmlFor="gender">Gender</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Gender"
                                                    defaultValue={gender}
                                                    name='gender'
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>DOB</label>
                                                <input
                                                    type="date"
                                                    defaultValue={moment(birthdate).format("YYYY-MM-DD")}
                                                    name="birthdate"
                                                    id="birthdate"
                                                    min="1850-01-01"
                                                    max={moment(new Date()).format("YYYY-MM-DD")}
                                                    className="form-control"
                                                    readOnly
                                                />
                                            </div>

                                            <label>Primary Skills</label>

                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                isMulti
                                                isClearable
                                                defaultValue={ps}
                                            />

                                            <label className='my-2'>Skills</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                isMulti
                                                isClearable
                                                defaultValue={sk}
                                            />

                                            <label className='my-2'>Language</label>
                                            <Select
                                                className="dropdown"
                                                placeholder="Select Option"
                                                isMulti
                                                isClearable
                                                defaultValue={lang}
                                            />

                                            <div className="form-group">
                                                <label htmlFor="experience">Experience </label>
                                                <input
                                                    type="text"
                                                    id="experience"
                                                    defaultValue={exp}
                                                    name="experience"
                                                    placeholder="Exmaple: 3"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dailyhours">
                                                    How many hours you can contribute daily?{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    id="dailyhours"
                                                    defaultValue={hours}
                                                    name="dailyhours"
                                                    placeholder="Exmaple: 5"
                                                    readOnly
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Are you working on any other online platform? *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Platform"
                                                    defaultValue={isPlatform}
                                                    name='platform'
                                                    readOnly
                                                />
                                            </div>
                                            {isPlatform === "yes" ? (
                                                <div>
                                                    <div className="form-group">
                                                        <label htmlFor="monthlyEarning">Monthly Earning</label>
                                                        <input
                                                            type="text"
                                                            id="monthlyEarning"
                                                            defaultValue={monthlyEarning}
                                                            readOnly
                                                            name="monthlyEarning"
                                                            placeholder="Monthly Earning"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="platformName">Name Of Platform</label>
                                                        <input
                                                            type="text"
                                                            id="platformName"
                                                            defaultValue={nameOfPlatform}
                                                            readOnly
                                                            name="platformName"
                                                            placeholder="Name Of Platform"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-3 py-5">
                                        <h5 className="mt-5 mb-4">Other Details</h5>
                                        <div className="form-group">
                                            <label htmlFor="onboard">
                                                Why do you think we should onboard you?{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="onboard"
                                                name="onboard"
                                                defaultValue={onBoard}
                                                placeholder="do you think we should onboard you"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="interview">
                                                What is a suitable time for interview?{" "}
                                            </label>
                                            <input
                                                type="text"
                                                id="interview"
                                                name="interview"
                                                defaultValue={interviewTime}
                                                placeholder="suitable time for interview"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="city">
                                                Which city do you currently live in?
                                            </label>
                                            <input
                                                type="text"
                                                id="city"
                                                name="city"
                                                defaultValue={cityName}
                                                placeholder="City"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="income">
                                                Main source of business ( other than astrology)?
                                            </label>
                                            <input
                                                type="text"
                                                name="income"
                                                defaultValue={incomeSource}
                                                placeholder="Income"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="chatrate">
                                                Chat Rate
                                            </label>
                                            <input
                                                type="text"
                                                name="chatrate"
                                                defaultValue={chatRate}
                                                placeholder="Chat Rate"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="callrate">
                                                Call Rate
                                            </label>
                                            <input
                                                type="text"
                                                name="callrate"
                                                defaultValue={callRate}
                                                placeholder="Call Rate"
                                                readOnly
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="about">About</label>
                                            <textarea
                                                readOnly
                                                className="form-control"
                                                name="about"
                                                id="about"
                                                defaultValue={description}
                                                style={{ height: "300px", overflowY: "scroll" }}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    :
                    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                        <div className="container rounded bg-white mt-5 mb-5 text-center">
                            <CircularProgress color="success" />
                        </div>
                    </Stack >
            }
        </>
    )
}
