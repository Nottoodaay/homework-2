
const Child = ({users, isUserLoggedIn}) =>{
    const {name, lastName, age} = users

    if(!isUserLoggedIn){
        return <h1>you are not authorised</h1>
    }

   return <div>{isUserLoggedIn && 
   <>
    <div>
        <h1>{name} {lastName}</h1>
        <h2>{age}</h2>
    </div>
    </>}
</div>
}

export default Child