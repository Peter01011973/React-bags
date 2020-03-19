import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFiltersSaga } from '../../store/bagsFilters/actions';

interface Props {
    
}

const GetDataForFilters = (props: Props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('filters');
        dispatch(addFiltersSaga());        
    }, [])  
    return null
}

export default GetDataForFilters
