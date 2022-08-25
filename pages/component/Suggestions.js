import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
  //single random user profile generator
  function random() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      company: faker.company.name(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }

  //define a method to generate users up to 'max_size' amount
  const profiles = function (max_size) {
    const users = [];
    for (let index = 0; index < max_size; index++) {
      users.push(random());
    }
    return users;
  };

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = profiles(5);
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-5 ">
      <div className="flex justify-between mb-5">
        <h3 className="font-bold text-gray-500">Suggestions for you</h3>
        <button className="font-semibold ">See All</button>
      </div>

      {suggestions.map((profile, index) => (
        <div key={index} className="flex items-center justify-between mt-3">
          <img src={profile.avatar} className="w-11 h-11 rounded-full object-contain" alt="" />
          
          <div className="flex-1 ml-4">
            <h2 className="font-bold text-sm">{profile.username}</h2>
            <h3 className=" w-32 truncate">Works at {profile.company}</h3>
          </div>

          <button className="font-semibold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
