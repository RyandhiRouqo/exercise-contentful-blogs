export interface User {
    gender: string;
    name: { title: string; first: string; last: string };
  }
  
export interface RandomUserResponse {
    results: User[];
  }