'use client';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <header className="fixed w-full h-48 top-0 flex items-center justify-between w-full p-5 bg-gray-700 text-white z-50">
        <h1 className="text-6xl font-semibold ml-20 flex items-center">
          <img src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/bedrock.png" alt='-' className="mr-3 w-24 h-24" />
          Bedrock
        </h1>

        <div className="flex justify-end w-full space-x-20 mr-40">
          <nav>
          <h1 className="text-3xl font-semibold pl-2">
            <Link href='/product'>
              <a>Product</a>
            </Link>
          </h1>
          <h1 className="text-3xl font-semibold pl-2">
            <Link href='/about'>
              <a>About</a>
            </Link>
          </h1>
          <h1 className="text-3xl font-semibold pl-2">
            <Link href='/cases'>
              <a>Use Cases</a>
            </Link>
          </h1>
          <h1 className="text-3xl font-semibold pl-2">
            <Link href='/resources'>
              <a>Resources</a>
            </Link>
          </h1>
          <h1 className="text-3xl font-semibold pl-2">
            <Link href='/contact'>
              <a>Contact Us</a>
            </Link>
          </h1>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-left w-full  mt-60">
      <div className="container w-full bg-gray-500 text-gray-900">
  <div className="flex justify-end">
    <div>
      <h2 className="text-6xl font-semibold mr-80">00DDDDDD0000000000</h2>
      <div className="container mx-auto">
        <h3 className="text-3xl font-semibold mb-4 mt-10">Features:</h3>
        <ul className="list-disc pl-5">
          <li>Easy deployment (software solution) across all existing devices and applications</li>
          <li>Zero install on end-user platforms</li>
          <li>Supports phased upgrade</li>
        </ul>
        <ul className="list-disc pl-5 mt-5">
          <li>Standard, approved algorithms and protocol foundations</li>
          <li>Heavily open-source system components</li>
          <li>Scalable, high-availability solution</li>
          <li>Enables zero trust architecture adherence</li>
        </ul>
      </div>
    </div>
    <div>
  <img src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/email.png" alt="-" className="ml-240 w-full h-auto rounded-full object-cover" />
    </div>

  </div>
</div>


        <section className="mb-10"></section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
          <ul className="list-disc pl-5">
            <li>Policy-enabled centralized control of cryptography</li>
            <li>Future-proof rapid upgrade as needed for future algorithm breakdown</li>
            <li>Algorithm agnostic with support for preferred algorithms per jurisdiction</li>
            <li>Visibility into cryptographic operations and support for cryptography audit</li>
            <li>Tierable protections for high-security needs and high-threat environments</li>
            <li>Enables responsiveness to enterprise risk posture</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Active Defense</h2>
          <ul className="list-disc pl-5">
            <li>Heavy sensor instrumentation throughout system</li>
            <li>Anomaly analysis enables attack detection</li>
            <li>Automated analytics backed up with threat-hunting team for unknown anomalies</li>
            <li>Countermeasures implemented in opportune functions</li>
            <li>Control-plane enables activation of countermeasures</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
          <ul className="list-disc pl-5">
            <li>Policy-enabled centralized control of cryptography</li>
            <li>Future-proof rapid upgrade as needed for future algorithm breakdown</li>
            <li>Algorithm agnostic with support for preferred algorithms per jurisdiction</li>
            <li>Visibility into cryptographic operations and support for cryptography audit</li>
            <li>Tierable protections for high-security needs and high-threat environments</li>
            <li>Enables responsiveness to enterprise risk posture</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
          <ul className="list-disc pl-5">
            <li>Policy-enabled centralized control of cryptography</li>
            <li>Future-proof rapid upgrade as needed for future algorithm breakdown</li>
            <li>Algorithm agnostic with support for preferred algorithms per jurisdiction</li>
            <li>Visibility into cryptographic operations and support for cryptography audit</li>
            <li>Tierable protections for high-security needs and high-threat environments</li>
            <li>Enables responsiveness to enterprise risk posture</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
          <ul className="list-disc pl-5">
            <li>Policy-enabled centralized control of cryptography</li>
            <li>Future-proof rapid upgrade as needed for future algorithm breakdown</li>
            <li>Algorithm agnostic with support for preferred algorithms per jurisdiction</li>
            <li>Visibility into cryptographic operations and support for cryptography audit</li>
            <li>Tierable protections for high-security needs and high-threat environments</li>
            <li>Enables responsiveness to enterprise risk posture</li>
          </ul>
        </section>

      </main>

      <footer className="flex items-center justify-center w-full h-96 p-5 bg-gray-700 text-white">
        <h1 className="text-3xl font-semibold ml-20 flex items-center">
     
        </h1>
        <div className="flex justify-end w-60% space-x-20 mr-40">
          <h1 className="text-2xl font-semibold pl-2">About</h1>
          <h1 className="text-2xl font-semibold pl-2">Product</h1>
          <h1 className="text-2xl font-semibold pl-2">Use Cases</h1>
          <h1 className="text-2xl font-semibold pl-2">Resources</h1>
          <h1 className="text-2xl font-semibold pl-2">Contact Us</h1>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
