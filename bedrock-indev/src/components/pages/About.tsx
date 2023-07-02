import { Link } from 'react-router-dom';
import Header from '../parts/Header';

const HomePage: React.FC = () => {
    return (
        <div>
        <div className="flex w-full flex-col items-center justify-center min-h-screen bg-white text-gray-800">
          <Header />
  
          <main className="w-full mt-40">
            <div className="w-full bg-gray-500 text-gray-900">
              <div className="flex justify-end mx-auto container">
                <div>
                  <h2 className="text-6xl mt-20 font-semibold mr-80">00DDDDDD0000000000</h2>
                  <div className="container mx-auto">
                    <h3 className="text-3xl font-semibold mb-4 mt-10">Features:</h3>
                    <ul className="list-disc pl-5 text-xl">
                      <li>Easy deployment (software solution) across all existing devices and applications</li>
                      <li>Zero install on end-user platforms</li>
                      <li>Supports phased upgrade</li>
                    </ul>
                    <ul className="list-disc pl-5 mt-5 text-xl">
                      <li>Standard, approved algorithms and protocol foundations</li>
                      <li>Heavily open-source system components</li>
                      <li>Scalable, high-availability solution</li>
                      <li>Enables zero trust architecture adherence</li>
                    </ul>
                  </div>
                </div>
                <div>
                <img 
                src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/email.png" 
                alt="-" 
                className="w-240 h-240 rounded-full object-cover" 
                onError={(e) => {
                    console.error('Failed to load image', e);
                }}
                />

                </div>
              </div>
            </div>
  
            <section className="mb-10"></section>
  
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
            </section>
  
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
              <ul className="list-disc pl-5"></ul>
            </section>
  
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
              <ul className="list-disc pl-5">
                <li>Enables responsiveness to enterprise risk posture</li>
              </ul>
            </section>
          </main>
  
          
        </div>
      </div>
    );
  };
  
  export default HomePage;
  