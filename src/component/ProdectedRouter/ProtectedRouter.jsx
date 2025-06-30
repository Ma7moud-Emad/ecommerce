import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
function ProtectedRouter({ children }) {
  const navigate = useNavigate();

  if (localStorage.getItem("tkn") === null) {
    Swal.fire({
      icon: "info",
      title: "You are not logged in. Please login to get access",
      text: "Do you want to log in ?",
      showDenyButton: true,
      confirmButtonText: "Log In",
      confirmButtonColor: "#0aad0a",
      denyButtonText: `Cancle`,
      denyButtonColor: "red",
      background: "#eee",
      backdrop: "0000005e",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else {
        navigate("/home");
      }
    });
    return <></>;
  } else {
    return <>{children}</>;
  }
}

export default ProtectedRouter;
