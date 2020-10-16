export interface UserResponse {
    status : number,
    message : string,
    data : LoginResponse
     
}
export interface LoginResponse {
    id : number,
    first_name : string,
    last_name : string,
    email : string,
    new_user: number
}

export interface TrackResponse {
  id: number;
  id_user: number;
  link: string;
}