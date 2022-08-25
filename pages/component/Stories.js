import { faker } from "@faker-js/faker";

import { useEffect, useState } from "react";

import Story from "./Story";

const Stories = () => {
  //single random user profile generator
  function randomProfile() {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
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
      users.push(randomProfile());
    }
    return users;
  };

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = profiles(50);
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 bg-white mt-5 mb-5 border-gray-300 border rounded-xl overflow-x-scroll p-6 shadow w-[28rem] scrollbar-hide text-gray-600">
      {suggestions.map((profile, index) => (
        <Story key={index} img={profile.avatar} username={profile.username} />
      ))}
    </div>
  );
};

export default Stories;
