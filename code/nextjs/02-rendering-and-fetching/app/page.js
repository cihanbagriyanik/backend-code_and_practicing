// import ClientComponent from "./components/ClientComponent";
// import ServerComponent from "./components/ServerComponent";

export const metadata = {
  title: "Dashboard Page",
  description: "This is Dashboard page",
};

export default function Dashboard() {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, This is Dashboard Page
      </h1>
      {/* <ServerComponent /> */}
      {/* <ClientComponent /> */}
      {/* //* nested olarak client component içinde server component kullanmak istiyorsak children yapısını kullanmalıyız */}
      {/* <ClientComponent>
        <ServerComponent />
      </ClientComponent> */}
    </div>
  );
}
