import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchHeroes = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const emailId = "deepak@example.com";

const DependentQueries = () => {
    const {
        isLoading,
        data: user,
        error,
        isError,
    } = useQuery(["fetch-user", emailId], () => fetchUserByEmail(emailId));

    const channelId = user?.data?.channelId;

    const { data: heroes } = useQuery(
        ["heroes", channelId],
        () => fetchHeroes(channelId),
        {
            enabled: !!channelId, //will only gets called if channel id is present
        }
    );

    return (
        <>
            <div>DependentQueries Queries</div>
        </>
    );
};

export default DependentQueries;
