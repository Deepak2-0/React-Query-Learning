import { useQuery, useMutation, useQueryClient } from "react-query";
// import axios from "axios";
import { request } from "../axios-utils";

const fetchSuperHeroes = () => {
    // return axios.get("http://localhost:4000/superheroes");
    return request({ url: "/superheroes" });
};

const addSuperHero = (hero) => {
    // return axios.post("http://localhost:4000/superheroes", hero);
    return request({ url: "/superheroes", method: "post", data: hero });
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
//Handling Mutation Response
// export const useAddSuperHeroData = () => {
//     const queryClient = useQueryClient();
//     return useMutation(addSuperHero, {
//         onSuccess: (data) => {
//             queryClient.setQueryData("super-heroes", (oldQueryData) => {
//                 return {
//                     ...oldQueryData,
//                     data: [...oldQueryData.data, data.data],
//                 };
//             });
//         },
//     });
// };

//OR
//Optimistic Updates
export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient();
    return useMutation(addSuperHero, {
        onMutate: async (newHero) => {
            await queryClient.cancelQueries("super-heroes");
            const previousHeroData = queryClient.getQueryData("super-heroes");
            queryClient.setQueryData("super-heroes", (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData.data,
                        {
                            id: oldQueryData?.data?.length + 1,
                            ...newHero,
                        },
                    ],
                };
            });

            return {
                previousHeroData,
            };
        },
        onError: (error, hero, context) => {
            queryClient.setQueryData("super-heroes", context.previousHeroData);
        },
        onSettled: () => {
            queryClient.invalidateQueries("super-heroes");
        },
    });
};
