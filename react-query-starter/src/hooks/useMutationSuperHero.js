import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
    return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = () => {
    return useQuery("super-heroes", fetchSuperHeroes, {});
};

// export const useAddSuperHeroData = () => {
//     const queryClient = useQueryClient();
//     return useMutation(addSuperHero, {
//         onSuccess: () => {
//             queryClient.invalidateQueries("super-heroes"); //erase past data so that new api call will be made
//         },
//     });
// };

// OR

//Directly appending the new data to superheroes list, so that no need for calling the super-heroes data again
export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient();
    return useMutation(addSuperHero, {
        onSuccess: (data) => {
            queryClient.setQueryData("super-heroes", (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data],
                };
            });
        },
    });
};
