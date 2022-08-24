import Post from "./Post";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";

function Posts() {
  //single random user profile generator
  function randomPro() {
    return {
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
      img: `${faker.image.people()}?random=${Math.round(Math.random() * 1000)}`,
      userImg: faker.internet.avatar(),
      caption: faker.lorem.sentence(20),
      registeredAt: faker.date.past(),
    };
  }

  //define a method to generate users up to 'max_size' amount
  const profiles = function (max_size) {
    const users = [];
    for (let index = 0; index < max_size; index++) {
      users.push(randomPro());
    }
    return users;
  };

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = profiles(1);
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="w-[28rem] bg-white border-gray-300 border rounded-xl shadow mb-5">
      {suggestions.map((profile, index) => (
        <Post
          key={index}
          id={profile.id}
          username={profile.username}
          userImg={profile.userImg}
          img={profile.img}
          caption={profile.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
