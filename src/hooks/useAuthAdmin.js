import { useSelector } from "react-redux";

export default function useAuthAdmin(){
  const auth=useSelector(state=>state.auth)
  if(auth?.token && auth?.user?.isAdmin){
    return true;
  }else{
    return false;
  }
}