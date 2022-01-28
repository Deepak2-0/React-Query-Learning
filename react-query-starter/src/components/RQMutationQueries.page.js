import { useState } from "react";

import {
    useSuperHeroesData,
    useAddSuperHeroData,
} from "../hooks/useMutationSuperHero";
import { Link } from "react-router-dom";

export const RQMutationSuperHeroes = () => {
    const [superHero, setSuperHero] = useState("");
    const [alterEgo, setAlterEgo] = useState("");

    const {
        isLoading,
        data: superheroes,
        isError,
        error,
    } = useSuperHeroesData();

    const {
        isLoading: isLoading1,
        mutate: addHero,
        isError: isError1,
        error: error1,
    } = useAddSuperHeroData();

    const handleAddHero = () => {
        const hero = { name: superHero, alterEgo };

        addHero(hero);
        setSuperHero("");
        setAlterEgo("");
    };

    if (isLoading) return <h2>Loading ....</h2>;

    if (isError || isError1)
        return (
            <h2>
                Err : {error?.message || error1?.message}, please try again
                later
            </h2>
        );

    return (
        <>
            <h2>React Query Super Heroes Page For Mutation</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter Super Hero"
                    value={superHero}
                    onChange={(el) => setSuperHero(el.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Alter Ego"
                    value={alterEgo}
                    onChange={(el) => setAlterEgo(el.target.value)}
                />
                <button onClick={handleAddHero}>Add Hero</button>
            </div>

            {superheroes.data.map((hero) => (
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}

            {isLoading1 && <h2> Loading ...</h2>}
        </>
    );
};
