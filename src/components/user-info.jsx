export const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <ul>
        Books:{" "}
        {books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading....</h1>
  );
};
