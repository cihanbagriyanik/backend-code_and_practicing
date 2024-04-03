import data from "/db.json";
export async function GET(request, { params }) {
  const id = Number(params.id);
  const userDetail = data.users.find((item) => item.id === id);
  return Response.json(userDetail);
}
