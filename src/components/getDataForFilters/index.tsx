import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFiltersSaga } from '../../store/bagsFilters/actions';

interface Props {
    
}

const GetDataForFilters = (props: Props) => {
    // const isLoading = useSelector();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addFiltersSaga());        
    }, []) 
    // if () 
    return null
}

export default GetDataForFilters
