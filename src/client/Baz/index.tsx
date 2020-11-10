import * as React from "react";
import axios from "axios";

interface Props {
  url: string;
}

export const Post: React.FunctionComponent<Props> = ({ url }) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const sendReq = async () => {
      const res = await axios.get(url);
      setData(res.data);
    };

    sendReq();
  }, []);

  if (!data) {
    return <span data-testid="loading">"Loading...."</span>;
  }

  return (
    <div>
      <span data-testid="body">{data}</span>
    </div>
  );
};
