import { FC, useEffect, useState } from "react";
import { UserListProps, User } from "./userList.types";
import axios from "axios";

export const UserList: FC<UserListProps> = ({ url }) => {
  const [list, setList] = useState<Array<User>>([]);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(url);
        setList(response.data);
      } catch (error) {
        console.log("Ошибка получения списка пользователей");
      }
    };
    fetchList();
  }, []);

  return (
    <div>
      <h1>Список пользователей: </h1>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            Имя: {user.name} | Никнейм: {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
