import "./Single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Info</h1>
            <div className="item">
              <img src="https://www.michaelpage.co.in/sites/michaelpage.co.in/files/2022-05/Software%20Developer.jpg" alt="profile" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">GULAM GHOUSE</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"> gulamghouse@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 8220514374</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">97/32, Vathiya Palli Street Parangipettai Cuddalore Dist Tamilnadu </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="user spending ( last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transacations</h1>

          <List/>
        </div>

      </div>
    </div>
  )
}

export default Single;