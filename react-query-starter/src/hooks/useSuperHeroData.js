import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
    return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId));
};
//KEY IS ["super-hero, heroId"] as different key for different id

// OR

// const fetchSuperHero = ({ queryKey }) => {
//     const heroId = queryKey[1];
//     return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

// export const useSuperHeroData = (heroId) => {
//     return useQuery(["super-hero", heroId], fetchSuperHero);
// };
