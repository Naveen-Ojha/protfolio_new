import React from 'react'
import { useLocation } from 'react-router-dom';
import Account from '../component/Account';
import PaymentHistory from '../component/PaymentHistory';

export default function UserDetails() {

    const location = useLocation()
    const id = location.pathname.split('/')[3]

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 my-5'>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Account Details</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Payment Histroy</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <Account id={id} />
                            </div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <PaymentHistory id={id} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
