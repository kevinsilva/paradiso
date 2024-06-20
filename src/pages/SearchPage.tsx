import { useParams } from 'react-router-dom';
export const SearchPage = () => {
  const { query } = useParams();
  return <div>{query}</div>;
};
