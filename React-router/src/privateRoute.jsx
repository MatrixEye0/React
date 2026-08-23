import { useAuth } from './contex.jsx';
import { Navigate } from 'react-router-dom';
// private route denie our acces if i not log in only when they log correct
// now when i type dashbord in url they not give acces only access when they log in 
const ProtectedRoute = ({children})=>{
   const {islog}=useAuth();
   if(!islog){
    return <Navigate to="/login" replace />
   }
   return children;
}
export default ProtectedRoute