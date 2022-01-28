import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
    return axios.get(
        `http://localhost:4000/colors?_limit=2&_page=${pageNumber}`
    );
};

const PaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const {
        isLoading,
        data: colorsData,
        error,
        isError,
        isFetching,
    } = useQuery(["fetch-colors", pageNumber], () => fetchColors(pageNumber), {
        keepPreviousData: true, //useFul to prevent layout shift
    });

    if (isLoading) return "Loading....";

    if (isError) return `Error : ${error?.message}`;
    return (
        <>
            <div>PaginatedQueries</div>

            <button
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1 ? true : false}
            >
                Prev Page
            </button>
            <button
                onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber === 4 ? true : false}
            >
                Next Page
            </button>

            {colorsData?.data?.map((colorData) => (
                <h2 key={colorData?.id}>
                    {colorData.id}: {colorData?.color}
                </h2>
            ))}

            <h3>Current Page Number : {pageNumber}</h3>

            {
              isFetching && <h2>Loading ..</h2>
            }
        </>
    );
};

export default PaginatedQueries;
