import React, {useEffect} from 'react';
import { useDispatch, connect } from 'react-redux';
import { addBagsSAGA } from '../../store/bags/actions';
import { RootState } from '../../store/storeConfig';
import { selectBags, getIsLoading, getError, getPageSize, getCurrentPage } from '../../store/bags/selectors';
import { BagI } from '../../interfaces';
import BagsList from '../../components/bagsList';
interface Props {
    bags: BagI[],
    isLoading: boolean,
    isError: boolean,
    pageSize: number,
    currentPage: number
}

const Bags: React.FC<Props> = ({bags, isLoading, isError, pageSize, currentPage}) => {
    const dispatch = useDispatch();

    useEffect(() => {  
        dispatch(addBagsSAGA({currentPage, pageSize}))
    }, [dispatch, currentPage, pageSize])

    return (
        <BagsList
            bags = {bags}
            isLoading = {isLoading}
            isError = {isError}
            pageSize = {pageSize}
            currentPage = {currentPage}
        />
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        bags: selectBags(state),
        isLoading: getIsLoading(state),
        isError: getError(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state)
    }
}

export default connect(mapStateToProps)(Bags)
