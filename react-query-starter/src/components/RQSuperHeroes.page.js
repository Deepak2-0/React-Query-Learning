// import { useQuery } from "react-query";
// import axios from "axios";

import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

// const fetchSuperHeroes = () => {
//     return axios.get("http://localhost:4000/superheroes");
// };

export const RQSuperHeroesPage = () => {
    // const {
    //     isLoading,
    //     data: superheroes,
    //     isError,
    //     error,
    //     isFetching,
    // } = useQuery("super-heroes", fetchSuperHeroes, {
    //     // cacheTime: 5000, //defualt value is 5min i.e 300,000
    //     // staleTime:30000, //default staleTime is 0s,
    //     //will not call the api till stale time, once data is present, ie, no api call is made in background
    //     //which happens for cacheTime
    //     // refetchOnMount: false, //defualt is true //ie. api call whenevent component mounts,
    //     //should be kept false if you know, data is not going to change,
    //     // refetchOnWindowFocus: false, //default is true
    //     //If set to true, the query will refetch on window focus if the data is stale. If set to false,
    //     //the query will not refetch on window focus. If set to 'always', the query will always refetch on window focus.
    //     // Defaults to true.
    //     //so useful when used is staleTime
    //     // refetchInterval:2000, //defaults to false, is Used for polling, but not in background,
    //     //if you want polling to happend in background also, then
    //     // refetchInterval:2000,
    //     // refetchIntervalInBackground:true
    // });

    //fething on click of a button
    // const {
    //     isLoading,
    //     data: superheroes,
    //     isError,
    //     error,
    //     isFetching,
    //     refetch
    // } = useQuery("super-heroes", fetchSuperHeroes, {
    //     enabled: false, //default is true, means if true will call the api, once the component is mounted, and false,
    //then will call the api only when refetch is called
    // });

    // console.log({ isLoading, isFetching });

    // if (isLoading || isFetching) return <h2>Loading ....</h2>;

    // if (isError) return <h2>Err : {error?.message}, please try again later</h2>;

    // return (
    //     <>
    //         <h2>React Query Super Heroes Page</h2>
    //         <button onClick={refetch}>Get Super Heroes</button>
    //         {superheroes?.data?.map((hero) => (
    //             <div key={hero.id}>{hero.name}</div>
    //         ))}
    //     </>
    // );

    // SUCCESS AND ERROR CALLBACKS
    // const onSuccess = (data) => {
    //     //e.g show toast or any side effect
    //     console.log("successfull and now you can show side effects");
    // };

    // const onError = (error) => {
    //     //e.g show toast or any side effect
    //     console.log(`Error and now you can show side effects ${error}`);
    // };

    // const {
    //     isLoading,
    //     data: superheroes,
    //     isError,
    //     error,
    // } = useQuery("super-heroes", fetchSuperHeroes, {
    // onSuccess: onSuccess,
    // onError: onError,
    // });

    // if (isLoading) return <h2>Loading ....</h2>;

    // if (isError) return <h2>Err : {error?.message}, please try again later</h2>;

    // return (
    //     <>
    //         <h2>React Query Super Heroes Page</h2>
    //         {superheroes?.data?.map((hero) => (
    //             <div key={hero.id}>{hero.name}</div>
    //         ))}
    //     </>
    // );

    // DATA TRANSFORMATION (can be used for sorting, filtering, etc)
    // const {
    //     isLoading,
    //     data: superheroes,
    //     isError,
    //     error,
    // } = useQuery("super-heroes", fetchSuperHeroes, {
    //     select: (data) => {
    //         const superHereNames = data.data.map((hero) => hero.name);
    //         return superHereNames;
    //     },
    // });

    // if (isLoading) return <h2>Loading ....</h2>;

    // if (isError) return <h2>Err : {error?.message}, please try again later</h2>;

    // return (
    //     <>
    //         <h2>React Query Super Heroes Page</h2>
    //         {superheroes.map((heroName) => (
    //             <div key={heroName}>{heroName}</div>
    //         ))}
    //     </>
    // );
    //
    //
    //

    //CUSTOM HOOKS
    const onSuccess = (data) => {
        //e.g show toast or any side effect
        console.log("successfull and now you can show side effects");
    };

    const onError = (error) => {
        //e.g show toast or any side effect
        console.log(`Error and now you can show side effects ${error}`);
    };
    const {
        isLoading,
        data: superheroes,
        isError,
        error,
    } = useSuperHeroesData(onSuccess, onError);

    if (isLoading) return <h2>Loading ....</h2>;

    if (isError) return <h2>Err : {error?.message}, please try again later</h2>;

    return (
        <>
            <h2>React Query Super Heroes Page</h2>
            {superheroes.data.map((hero) => (
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </>
    );
};
