import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFiltersSaga } from '../../store/bagsFilters/actions';
import { isLoadingFilters } from '../../store/bagsFilters/selectors';

interface Props {
    
}

const GetDataForFilters = (props: Props) => {
    const isLoading = useSelector(isLoadingFilters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addFiltersSaga());        
    }, [dispatch]) 
    if (isLoading) {console.log('JJJ');
     return <p>Loading...</p>; }
    return null
}

export default GetDataForFilters
