
import { NavLink } from 'react-router';
import img from '../../assets/CardPhoto/error-404.png'

const ErrorPage = () => {
    return (

        <div className='mx-auto max-w-[1440px] justify-center'>
            <div className=' flex justify-center'>
                <img className='h-[400px] w-[450px]' src={img} alt="" />
            </div>
             <div className='mt-10'>
                <h1 className='font-bold text-center text-5xl leading-20'>Oops, page not found!</h1>
                <p className='text-[#627382] text-[20px] text-center '>The page you are looking for is not available.</p>
            </div>
            <NavLink to={'/'}><button className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white flex items-center mx-auto m-4 gap-2 py-3 px-4 rounded-sm font-bold">
               Go Back
            </button></NavLink>
        </div>
    );
};

export default ErrorPage;