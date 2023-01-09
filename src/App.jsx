import { useEffect, useState } from "react";
import Loading from "./Loading";
import Card from "./Card";
const App = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const MainF = async () => {
    try {
      const func = await fetch("https://api.github.com/users");
      setdata(await func.json());
      setloading(false);
    } catch (error) {
      console.log("my Error is " + error);
    }
  };

  useEffect(() => {
    MainF();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Card data={data} />
    </>
  );
};
export default App;
