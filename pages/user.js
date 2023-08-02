import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../Components/MainContainer";

const User = ({users}) => {
    return (
        <MainContainer>
            <h1>Users list</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </li>)}
            </ul>
        </MainContainer>
    );
};

export default User;

export async function getStaticProps(context){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    return{
        props: {users},
    }
}