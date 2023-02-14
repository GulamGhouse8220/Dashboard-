import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";


const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart title="last 6 Months (Revenue)" aspect={2 / 1}/>
        </div>
        <div className="listCounter">
          <div className="listTitle">Latest Transacations</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home;