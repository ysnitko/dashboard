import { usersData } from "../dbusers";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const findUser = usersData.find((user) => user.id === parseInt(params.id));
  console.log(findUser);

  return Response.json(findUser);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const findUser = usersData.findIndex(
    (user) => user.id === parseInt(params.id)
  );

  console.log(findUser);

  const deleteuser = usersData[findUser];
  usersData.splice(findUser, 1);
  return Response.json(deleteuser);
}
