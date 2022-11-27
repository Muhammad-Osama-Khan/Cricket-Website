import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import {BiSearchAlt2} from "react-icons/bi";
import "./mid.css"
const Mid=()=>{
    return(<div>

<div className="web">

<h3 id="logo">ESPN CRIC</h3>

<ul id="items">
    <li className="item">SERIES</li>

 
    <li className="item">LIVE SCORE</li>





   

    <li className="item">  TEAMS   </li>
    <li className="item">  NEWS </li>
    <li className="item">FEATURES</li>
    <li className="item">VIDEOS</li>
    <li className="item">STATS</li>
</ul>
<p className="moon" > EDITION PK</p>

<h5 className="moon"> <BsFillMoonFill/></h5>
<h5 className="moon"> <BsFillBellFill/> </h5>
<h5 className="moon"><BiSearchAlt2/></h5>
</div>




    </div>);
}
export default Mid;