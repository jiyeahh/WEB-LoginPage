import React, { useEffect } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom';


function LandingPage(props) {

    const onClickHandler = () => {
        Axios.get(`/api/users/logout`)
            .then(response => {
                if (response.data.success) {
                    props.history.push('/login')
                } else {
                    alert('Failed to logout!')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>시작페이지</h2>

            <button onClick={onClickHandler}>
                logout
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
