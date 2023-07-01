const HomePage: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <header className="fixed w-full h-48 top-0 flex items-center justify-between w-full p-5 bg-gray-700 text-white z-50">
        <h1 className="text-6xl font-semibold ml-20 flex items-center">
          <img src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/bedrock.png" alt='-' className="mr-3 w-24 h-24" />
          Bedrock
        </h1>
        <div className="flex justify-end w-full space-x-20 mr-40">
          <h1 className="text-3xl font-semibold pl-2">About</h1>
          <h1 className="text-3xl font-semibold pl-2">Product</h1>
          <h1 className="text-3xl font-semibold pl-2">Use Cases</h1>
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
              <img src="https://bedrock-indev-bucket.s3.eu-west-1.amazonaws.com/email.png" alt="-" className="w-480 h-480 rounded-full object-cover" />
            </div>
          </div>
        </div>

        <section className="mb-10"></section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Crypto-Agility</h2>
          <ul className="list-disc pl-5">
            <li>Enables responsiveness to enterprise risk posture</li>
          </ul>
        </section>

      </main>

      <footer className="flex items-center justify-center w-full h-96 p-5 bg-gray-700 text-white">
        <h1 className="text-3xl font-semibold ml-20 flex items-center">
          <img src='pictures/bedrock.png' alt='-' className="mr-3" />
          Bedrock
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
