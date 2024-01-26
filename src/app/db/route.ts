import { usersData } from "./dbusers";

export async function GET() {
  return Response.json(usersData);
}
