import "./New.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";


const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  // console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file ? URL.createObjectURL(file)
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <lable>
                  <DriveFolderUploadIcon className="icon" />
                </lable>
                <input type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <lable >{input.lable}</lable>
                  <input className="Input" type={input.type} placeholder={input.placeholder}></input>
                </div>
              ))}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New