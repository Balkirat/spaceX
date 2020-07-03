import React from "react";
import { useQuery, gql } from "@apollo/client";
import Drawer from "./components/Drawer";
import Content from "./components/Content";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: "300px",
    marginTop: "50px"
  },
});

const ROCKETS = gql`
  query {
    rockets {
      active
      description
      name
      cost_per_launch
      height {
        feet
        meters
      }
      diameter {
        feet
        meters
      }
      id
      type
    }
  }
`;

function App() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(ROCKETS);
  return (
    <div className="App">
      <Drawer />
      <div className={classes.root}>
        {error && <h1>{`YOU BROKE IT  ${error.message}`}</h1>}
        {!data || loading ? <h1>Loading...</h1> : <Content data={data} />}
      </div>
    </div>
  );
}

export default App;
