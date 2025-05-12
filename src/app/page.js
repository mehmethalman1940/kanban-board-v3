export default async function Home() {
  const res = await fetch("http://localhost:3000/api/roadmap");
  const data = await res.json();

  console.log(data);

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>
          {user.id + " " + user.title + " " + user.description}
        </li>
      ))}
    </ul>
  );
}
