import React, { useEffect, useState } from "react";
import styles from "./styles/Stories.module.css";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Stories() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const suggestions = [...Array(20)].map((_, i) => ({
  //     ...faker.helpers.contextualCard(),
  //     id: i,
  //   }));
  //   setData(suggestions);
  // }, []);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      id: i,
    }));
    setData(suggestions);
  }, []);

  const { data: session } = useSession();
  return (
    <div className={styles.sub}>
      <div className={styles.main}>
        {session && (
          <div className={styles.Storybox}>
            <div className={styles.Story}>
              <div className={styles.img}>
                <Image
                  src={session.user.image}
                  alt="user"
                  // layout='fixed'
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={styles.username}>{session.user.username}</div>
          </div>
        )}
        {data.map((user) => (
          <div key={user.id} className={styles.Storybox}>
            <div className={styles.Story}>
              <div className={styles.img}>
                <Image
                  src={user.avatar}
                  alt="user"
                  // layout='fixed'
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className={styles.username}>{user.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
