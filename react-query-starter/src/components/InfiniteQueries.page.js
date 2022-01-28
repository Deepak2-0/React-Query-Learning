import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchColors = ({ pageParam = 1 }) => {
    return axios.get(
        `http://localhost:4000/colors?_limit=2&_page=${pageParam}`
    );
};

const InfiniteQueries = () => {
    const {
        isLoading,
        data: colorsData,
        error,
        isError,
        isFetching,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery(["fetch-colors"], fetchColors, {
        getNextPageParam: (lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1;
            } else {
                return undefined;
            }
        },
    });

    if (isLoading) return "Loading....";

    if (isError) return `Error : ${error?.message}`;
    return (
        <>
            <div>Infinite Queries</div>

            {colorsData?.pages?.map((group, index) => {
                return (
                    <Fragment key={index}>
                        {group?.data?.map((colorData) => (
                            <h2 key={colorData.id}>
                                {colorData.id} : {colorData?.color}
                            </h2>
                        ))}
                    </Fragment>
                );
            })}

            <button onClick={fetchNextPage} disabled={!hasNextPage}>
                Load More
            </button>

            {isFetching && !isFetchingNextPage && <h2>Loading ...</h2>}

            {isFetchingNextPage && <h2>Loading More Data ..</h2>}
        </>
    );
};

export default InfiniteQueries;
