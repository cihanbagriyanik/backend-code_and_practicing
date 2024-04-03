import data from "/db.json";
export async function GET(request) {
  return Response.json(data.users);
}
