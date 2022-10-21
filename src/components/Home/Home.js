import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h3>This is Home</h3>
            {/* <p>Current user: {user?.displayName && user?.displayName}</p> */}
            <p>Current User: {user ? user.displayName : "Nobody Found"}</p>
        </div>
    );
};

export default Home;