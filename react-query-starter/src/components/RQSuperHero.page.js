import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useInitialSuperHeroData } from "../hooks/useInitialSuperHeroData";

const RQSuperHeroPage = () => {
    const { heroId } = useParams();

    // const {
    //     isLoading,
    //     data: superHeroData,
    //     error,
    //     isError,
    // } = useSuperHeroData(heroId);

    //Useful when some part of data is alreay present in parent page, so will show partial data and not show loader
    //till rest of data comes
    const {
        isLoading,
        data: superHeroData,
        error,
        isError,
    } = useInitialSuperHeroData(heroId);

    if (isLoading) return <h2>Loading ....</h2>;

    if (isError) return <h2>Err : {error?.message}, please try again later</h2>;

    const { name, alterEgo } = superHeroData?.data;

    return (
        <>
            <div>Super Hero Details</div>
            <h2>Name : {name}</h2>
            <p>AlterEgo : {alterEgo}</p>
        </>
    );
};

export default RQSuperHeroPage;
