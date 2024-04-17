/**
 * Интерфейс компонента UserList.
 */
export interface UserListProps {
  /**
   * Ссылка для запроса к списку пользователей.
   */
  url: string;
}

export type User = {
  id: string;
  name: string;
  username: string;
};
