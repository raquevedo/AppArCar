import { useNavigate } from 'react-router-dom';
import { deleteToken } from '../../utils/authToken';

export default function Logout(props) {
  const navigate = useNavigate()
  
  deleteToken();
  props.setUserLoggedIn(false);
  navigate('/');
}