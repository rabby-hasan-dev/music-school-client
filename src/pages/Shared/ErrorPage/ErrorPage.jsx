
import { Link, useRouteError } from 'react-router-dom';
import errorLogo from '../../../assets/error.jpg'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);


    return (
        <div className='flex justify-center   items-center mt-20'>

            <div id="error-page" className='text-center my-auto'>

                <p className='text-4xl' >Sorry, an unexpected error has occurred.</p>
                <p className='text-4xl text-red-500'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <img className='mx-auto lg:h-[600px]' src={errorLogo} alt="error" />
               <Link to='/'> <button className='btn hover:btn-info  bg-red-600 text-white'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;