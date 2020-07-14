import React, { useEffect } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom';


function LandingPage(props) {

    const onClickHandler0 = () => {

        props.history.push('/register')

    }
    const onClickHandler1 = () => {

        props.history.push('/login')

    }
    const onClickHandler2 = () => {
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
            <h2>시작페이지<br/></h2>
            <button onClick={onClickHandler0}>
                회원가입
            </button>
            <button onClick={onClickHandler1}>
                Login
            </button>
            <button onClick={onClickHandler2}>
                Logout
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
