import { Link } from 'react-router-dom';
import Header from '../parts/Header';
import Footer from '../parts/Footer';

const About: React.FC = () => {
    return (
      <div>
      <Header />
      <div className="flex w-full flex-col items-center justify-center min-h-screen bg-white text-gray-800">
          <main className="w-full mt-40 ">
              <div className="w-full bg-gray-500 text-gray-900 pl-10 pt-16 pb-24">
                  
                  <div className="grid grid-cols-2 gap-4 mx-auto container">
                      <div className="rounded-3xl shadow-md p-6 bg-white ">
                          <h2 className="text-6xl mt-20 mb-10 font-light">Cases</h2>
            
                          <div className="container mx-auto mb-10">
                             
                              <p className="text-lg mb-2">
                                  The development of quantum computers poses a significant threat to the
                                  security of current encryption algorithms. This has led to the rise of 
                                  post-quantum cryptography, aiming to secure data against both classical and 
                                  quantum computing threats.
                              </p>
                          </div>
                      </div>

          
                  </div>
              </div>

              <section className="mb-10 grid grid-cols-2 gap-4 bg-gray-500 pl-80">
                  <div className="rounded-3xl shadow-md p-6 bg-white">
                      <h2 className="text-4xl font-light mb-2">Case 1: </h2>
                      <p className="text-xl mb-2">
                          The development of quantum computers poses a significant threat to the security of 
                          current encryption algorithms. This has led to the rise of post-quantum cryptography, 
                          aiming to secure data against both classical and quantum computing threats.
                      </p>
                  </div>
                  <div>
                      <img 
                          src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/secure-email.png" 
                          alt="placeholder image" 
                          className="w-400 h-400 object-cover float-right"
                      />
                  </div>
                  <div className="rounded-3xl shadow-md p-6 bg-white">
                      <h3 className="text-4xl font-light mb-2 ">Quantum Computing</h3>
                      <p className="text-xl mb-2">
                          Quantum computers leverage quantum phenomena, such as superposition and entanglement, 
                          to perform computations at an unprecedented speed. This increase in computational power 
                          threatens the security of current cryptographic systems.
                      </p>
                  </div>

                  <div>
                      <img 
                          src="https://placeholder.com/400x400" 
                          alt="placeholder image" 
                          className="w-400 h-400 object-cover float-right"
                      />
                  </div>

                  <div className="rounded-3xl shadow-md p-6 bg-white">
                      <h3 className="text-4xl font-light mb-2">Cryptanalysis by Quantum Computers</h3>
                      <p className="text-xl mb-2">
                          Common public key encryption and signature schemes like RSA and ECC are vulnerable to 
                          quantum attacks. A sufficiently powerful quantum computer can efficiently break these 
                          using Shor's algorithm, jeopardizing the security of virtually all digital communications.
                      </p>

                      <h3 className="text-4xl font-light mb-2">Post-Quantum Cryptography</h3>
                      <p className="text-xl mb-2">
                          Post-quantum cryptography refers to cryptographic algorithms that can resist quantum 
                          computer-based attacks. These algorithms aim to replace or supplement current security 
                          algorithms in the advent of quantum computing.
                      </p>
                  </div>
                  <div>
                      <img 
                          src="https://placeholder.com/400x400" 
                          alt="placeholder image" 
                          className="w-400 h-400 object-cover float-right"
                      />
                  </div>
              </section>
          </main>
      </div>
      <Footer />
  </div>
    );
  };
  
  export default About;
  