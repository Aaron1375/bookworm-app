import axios from "axios";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
function LoginDropdown() {
    axios.interceptors.request.use(function (config){
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });

    let navigate = useNavigate();

    const logOutSubmit = (e) => {
        e.preventDefault();

        
        axios.post('/api/logout').then(response => {
            if(response.data.status === 200){
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                swal("Success",response.data,message, "success");
                navigate("/");

            }
        });
    }

    return (
        <DropdownButton
            variant="danger"
            className=""
            id="dropdown-basic-button"
            title="HO va Ten"
        >
            <Dropdown.Item href="#/" onClick={logOutSubmit}>Logout</Dropdown.Item>
        </DropdownButton>
    );
}
export default LoginDropdown;