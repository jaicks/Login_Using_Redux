import axios from 'axios';
 
export const userList = () => dispatch => {
    console.log('ye working')
    axios.get("./userinfo.json")
    .then(res=>{
        console.log(res.data)
        dispatch({
            type:"USER_LIST",
            payload: res.data
        })
    })
}

export const userLogin = (data, history) => dispatch =>{
    if(data.email === "hruday@gmail.com" && data.password === "hruday123"){

        history.push("/userlist")
        
       
    }else{
        dispatch({
            type:"LOGIN_STATUS",
            payload: false 
         })
    }
}