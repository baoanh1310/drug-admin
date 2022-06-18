import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import Dashboard from './components/Dashboard';
import authProvider from "./components/authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard} authProvider={authProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;