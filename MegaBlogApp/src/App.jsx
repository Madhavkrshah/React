function App() {
  const env = import.meta.env.VITE_APPWRITE_URL;
  console.log(env);

  return (
    <>
      <h1>A Blog App with AppWrite</h1>
    </>
  );
}

export default App;
