import "./widget.scss"
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const widget = ({ type }) => {
    let data;

    // temporary
    const amount = 100;
    const diff = 20;


    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "view all order",
                icon: <PersonOutlineOutlinedIcon
                 className="icon"
                  style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
            };
            break;
        case "order":
            data = {
                title: "ORDER",
                isMoney: false,
                link: "see all users",
                icon: <ShoppingCartOutlinedIcon
                 className="icon"
                  style={{backgroundColor:"rgba(218,165,32,0.2)", color:"goldenrod"}}/>
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view net earnings",
                icon: <MonetizationOnOutlinedIcon 
                 className="icon" 
                 style={{backgroundColor:"rgba(0,128,0,0.2)",color:"green"}}/>
                 
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "see details",
                icon: <AccountBalanceWalletOutlinedIcon 
                className="icon"
                style={{backgroundColor:"rgba(128,0,128,0.2)",color:"purple"}}/>

            };
            break;
        default:
            break;
    }




    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpOutlinedIcon className="arrow" />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default widget