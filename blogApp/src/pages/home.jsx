// const Home = ({ isGoal = 0 }) => {
//   //rafce
//   let result;
//   switch (true) {
//     case isGoal === 0:
//       result = <MissedGoal />;
//       break;
//     case isGoal === 1:
//       result = <Goal />;
//       break;
//     case isGoal === 2:
//       result = <HattrickGoal />;
//       break;
//     default:
//       result = <>NO GOAL REGISTERED</>;
//   }
//   return <>{result}</>;
// };
// const Goal = () => {
//   return <>1 Goal</>;
// };

// const MissedGoal = () => {
//   return <>No Goal</>;
// };

// const HattrickGoal = () => {
//   return <>2 Goal</>;
// };

// export default Home;

const Home = ({ data }) => {
  return (
    <>
      <ul>
        {data.length > 0 ? (
          data.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })
        ) : (
          <>No data</>
        )}
      </ul>
    </>
  );
};

export default Home;
