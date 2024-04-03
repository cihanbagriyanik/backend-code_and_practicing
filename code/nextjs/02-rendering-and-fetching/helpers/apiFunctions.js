//* Fetching Data on the Server with fetch
//? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
//* const res = await fetch(URL, { cache: "force-cache" }); default
//* const res = await fetch(URL, { cache: "no-store" }); cache'leme
//*   const res = await fetch(URL, { next: { revalidate: 10 } }); belirlenen saniye cinsinden süre sonunda veriyi tekrar çek tekrar

const URL = `http://localhost:3000/api/team`;

//* force-cache
export async function getUsers() {
  const res = await fetch(URL);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
