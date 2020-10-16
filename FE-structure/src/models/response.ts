export interface response{
    status:number;
    message:string;
    data: user ;
}
export interface user{
    id:number,
    first_name: string,
    last_name: string,
    email: string,
    user_password:string
  }
  
