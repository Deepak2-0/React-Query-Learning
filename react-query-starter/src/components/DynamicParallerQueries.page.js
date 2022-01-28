import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const heroIds = [1, 3];

const DynamicParallelQueries = () => {
    const queryResults = useQueries(
        heroIds.map((id) => {
            return {
                queryKey: ["super-hero", id],
                queryFn: () => fetchSuperHero(id),
            };
        })
    );

    console.log({ queryResults });

    return (
        <>
            <div>Dynamic Parallel Queries</div>
        </>
    );
};

export default DynamicParallelQueries;
