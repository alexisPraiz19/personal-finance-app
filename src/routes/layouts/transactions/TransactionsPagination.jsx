/---/
import { useEffect } from "react"
import { useDataContext } from "../../../context/DataContext"
import pagesBoxNumber from "../js/createPagesBoxNumber"
import { ArrowLeft, ArrowRight } from "../../../assets/Icons" 
/---/

export default function TransactionsPagination(){
    const { data } = useDataContext();
    useEffect(()=>{
        const $paginationContainer   = document.getElementById("pagination");
        const $paginationPageNumbers = $paginationContainer.querySelector(".pagination-pagesNumbers");
        let dataLength = data?.transactions?.length;
        let around = Math.ceil(dataLength / 10);

        if(around > 5) pagesBoxNumber($paginationPageNumbers, around);
    },[data])

    return(
        <div className="transaction-pagination" id="pagination">
            <button type="button" className="pagination-btn">
                <ArrowLeft/>
                Prev
            </button>

            <div className="pagination-pagesNumbers">
                <span className="number">1</span>
                <span className="number">2</span>
                <span className="number">3</span>
                <span className="number">4</span>
                <span className="number">5</span>
            </div>

            <button type="button" className="pagination-btn">
                Next
                <ArrowRight/>
            </button>
        </div>
    )
}