import axios from "axios";

export class UserServices {

   static async getUsers(){
       try{
           const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
           return response.data
       }catch (e) {
           console.log(e)
       }
   }
    static async getTodos(){
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`,{
                params: {
                    _limit: 10
                }
            })
            return response.data
        }catch (e) {
            console.log(e)
        }
    }
}