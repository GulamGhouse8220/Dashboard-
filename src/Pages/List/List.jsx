import "./List.scss"
import Sidebar  from "../../components/sidebar/Sidebar"
import Navbar  from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



const List = () => {
  return (
    <div className="List">
      {/* <AccountCircleOutlinedIcon/> */}
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List