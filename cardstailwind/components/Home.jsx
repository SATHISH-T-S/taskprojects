const Home = () => {
  const home = [
    { id: 1, name: "ROOM" },
    { id: 2, name: "CONTACT" },
    { id: 3, name: "LOCATION" },
  ];

  return (
    <div className="w-full bg-violet-400 border border-black rounded-lg p-4 flex items-center space-x-6">
      <h1 className="text-3xl font-bold text-white ml-4">RENTAL ROOMS</h1>

      {home.map((e) => (
        <div
          key={e.id}
          className="bg-cyan-300 border border-black rounded-md px-4 py-2 text-center text-black"
        >
          <a href="a.txt" className="font-medium">
            {e.name}
          </a>
        </div>
      ))}

      <div className="ml-auto bg-orange-200 text-red-600 border border-black px-5 py-2 rounded-md text-center font-semibold">
        PAIDLIST
      </div>
    </div>
  );
};

export default Home;
