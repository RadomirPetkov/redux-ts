import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RepositoriesState } from "../state/reducers/repositoryReducers";

export const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { loading, error, data } = useSelector(
    (state: { repositories: RepositoriesState }) => state.repositories
  );

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <h1>Search for packages</h1>

      <form onSubmit={submitForm}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name) => {
          return <div key={name}>{name}</div>;
        })}
    </div>
  );
};
