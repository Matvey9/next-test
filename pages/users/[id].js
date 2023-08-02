import {useRouter} from "next/router";
import styles from "../../styles/user.module.scss"
import MainContainer from "../../Components/MainContainer";
export default function User({user}) {

const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User id: {query.id}</h1>
                <div>Name: {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return{
        props: {user},
    }
}