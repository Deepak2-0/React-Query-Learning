import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends");
};

const ParallelQueries = () => {
    const { isLoading, data, error, isError } = useQuery(
        "super-heroes",
        fetchSuperHeroes
    );
    const {
        isLoading: isLoading2,
        data: friendsData,
        error: friendsError,
        isError: friendsIsError,
    } = useQuery("friends", fetchFriends);
    return (
        <>
            <div>Paraller Queries</div>
        </>
    );
};

export default ParallelQueries;
