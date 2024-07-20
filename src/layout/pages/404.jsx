import { useRouteError, Link} from "react-router-dom";

const ErrorPage = () =>{
    const error = useRouteError();

    return(
        <div className="w-full font-helvetica flex items-center flex-col h-full bg-pink-500 min-h-screen">
            <h1 className="font-OpenSans">Opss!😱</h1>
            <p className="text-9xl">404</p>
            <p>{error.statusText || error.message}</p>
            <button formTarget="blank" className="border rounded-full w-2/5 h-[50px] font-Sans404"><Link to="/login">Back To LoginPage</Link></button>
        </div>
    )
};

export default ErrorPage;