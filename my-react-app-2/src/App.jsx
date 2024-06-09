import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Sponger" age={30} isStudent={true} />
      <Student name="Patrick" age={45} isStudent={false} />
      <Student name="Squidbard" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Lem" />
    </>
  );
}

export default App;
