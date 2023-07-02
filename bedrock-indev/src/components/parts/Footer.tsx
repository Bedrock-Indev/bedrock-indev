import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <div>
            <footer className="flex items-center justify-center w-full h-96 p-5 bg-gray-700 text-white">
                <h1 className="text-3xl font-semibold ml-20 flex items-center">
                    <img src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/bedrock.png" alt="-" className="mr-8 w-24 h-24" />
                </h1>
                <div className="flex justify-end w-full space-x-20 mr-40">
                    <h1 className="text-3xl font-semibold pl-2"><Link to='/about'>About</Link></h1>
                    <h1 className="text-3xl font-semibold pl-2"><Link to='/products'>Products</Link></h1>
                    <h1 className="text-3xl font-semibold pl-2"><Link to='/cases'>Cases</Link></h1>
                    <h1 className="text-3xl font-semibold pl-2"><Link to='/resources'>Resources</Link></h1>
                    <h1 className="text-3xl font-semibold pl-2"><Link to='/contact'>Contact Us</Link></h1>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
