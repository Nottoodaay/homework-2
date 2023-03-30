import Child from "./child.component"
 const users = [
        {
            name : 'giorgi',
            lastName: 'odikadze',
            age: 19,
            id: 1
        },
        {
            name : 'jon',
            lastName: 'do',
            age: 25,
            id: 2
        },
        {
            name : 'spiridon',
            lastName: 'spiridonovichi',
            age: 50,
            id: 3
        }
    ]
    

const Parent =()=>{
   
    
    if(users.length > 0){
        return(
            users.map((user)=>(
                <Child users={user} key={user.id} isUserLoggedIn={true}/>
            ))
        )
    }else{
        return <div>
            <h1>
            no users in the system.
            </h1>
        </div>
    }
    
    
}

export default Parent