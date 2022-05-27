import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {Dispatch} from 'redux';
import {loadingAC, LoadingACType} from './bll/loadingReducer';
import loading1 from './loading.gif'
import loading8 from './loading8.gif'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    const dispatch = useDispatch<Dispatch<LoadingACType>>()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => dispatch(loadingAC()), 5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>
                        <img src={loading1} alt="loading..." style={{height: '100px'}} />
                        <img src={loading8} alt="loading..." style={{height: '100px'}} />
                    </div>

                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
