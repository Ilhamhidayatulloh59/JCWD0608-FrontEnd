export interface UserState {
  objectId: string | null;
  name: string;
  email: string;
}

export interface BlogInput {
  title: string;
  category: string;
  content: string;
}
