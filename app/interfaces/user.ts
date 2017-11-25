export interface User {
  id: Number;
  is_bot: Boolean;
  first_name: String;
  last_name?: String;
  username?: String;
  language_code?: String;
}
