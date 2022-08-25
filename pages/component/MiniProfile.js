function MiniProfile() {
  return (
    <div className="mt-5 flex items-center justify-between">
      <img
        className="w-[3.2rem] h-[3.2rem] rounded-full "
        src="https://avatars.githubusercontent.com/u/64247342?v=4"
        alt=""
      />
      <div className="pl-4">
        <h2  className="font-bold">reza2020828</h2>
        <h3 className="text-gray-500">Ashik Reza</h3>
      </div>

      <button className="pl-6 font-bold text-blue-400">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
