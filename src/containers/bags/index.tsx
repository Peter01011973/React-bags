import React, {useEffect} from 'react';
import { useDispatch, connect } from 'react-redux';
import { addBagsSAGA, changeCurrentPage, changePageSize } from '../../store/bags/actions';
import { RootState } from '../../store/storeConfig';
import { selectBags, getIsLoading, getError, getPageSize, getCurrentPage, getbagsListTotalSize } from '../../store/bags/selectors';
import { BagI } from '../../interfaces';
import BagsList from '../../components/bagsList';
import { useHistory } from 'react-router-dom';
import Pagination from '../../components/UI/pagination';
import { addBagToCart } from '../../store/bagsCart/actions';
interface Props {
    bags: BagI[],
    isLoading: boolean,
    isError: boolean,
    pageSize: number,
    currentPage: number,
    bagsListTotalSize: number
}

const Bags: React.FC<Props> = ({bags, isLoading, isError, pageSize, currentPage, bagsListTotalSize}) => {
    const dispatch = useDispatch();
    let history = useHistory();
    let startIndex: number = 1;
    let endIndex: number = 1;

    const getPage = (currentPage: number, totalItems: number, pageSize: number) => {
        startIndex = (currentPage - 1) * pageSize;
        endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    }

    const currentPageChangeHandler = (page: number) => dispatch(changeCurrentPage(page));

    const pageSizeChangeHandler = (rowsPerPage: number) => {
        console.log(rowsPerPage);
        dispatch(changePageSize(rowsPerPage))
        dispatch(changeCurrentPage(1));
    }

    getPage(currentPage, bagsListTotalSize, pageSize);

    useEffect(() => {  
        dispatch(addBagsSAGA({currentPage, pageSize}))
    }, [dispatch, currentPage, pageSize])

    const addToCart = (event: any, bag: BagI) => {
        dispatch(addBagToCart(bag))
    }

    const bagInfo = (id: number) => history.push(`/bags/${id}`);

    return (
        <>
            <Pagination
                dataLenght={bagsListTotalSize}
                currentPageChangeHandler={currentPageChangeHandler}
                currentPage={currentPage}
                pageSizeArray={[3, 5, 10]}
                pageSizeChangeHandler={pageSizeChangeHandler}
                pageSize={pageSize}
                startIndex={startIndex + 1}
                endIndex={endIndex + 1}
            />
            <BagsList
                bags={bags}
                isLoading={isLoading}
                isError={isError}
                pageSize={pageSize}
                currentPage={currentPage}
                addToCart={addToCart}
                bagInfo={bagInfo}
            />
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        bags: selectBags(state),
        isLoading: getIsLoading(state),
        isError: getError(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        bagsListTotalSize: getbagsListTotalSize(state)
    }
}

export default connect(mapStateToProps)(Bags)
