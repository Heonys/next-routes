import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const GuestLayout = ({ children, modal }: Props) => {
  return (
    <main>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
      {modal}
      {children}
    </main>
  );
};

export default GuestLayout;
