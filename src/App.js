import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/pages/Dashboard/Header';
import DataGrid from './Components/pages/Datagrid/DataGrid';
import Dropdown from './Components/pages/Dropdown/Dropdown';
import Calender from './Components/pages/Calender/Calender';


const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/dropdown' element={<Dropdown/>}/>
          <Route path='/calender' element={<Calender/>}/>
          <Route path="/datagrid" element={<DataGrid/>}/>
          
        </Route>

      </Routes>
    </BrowserRouter>
  </div>
};

export default App;