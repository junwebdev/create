import { useState } from "react";
import MockData from '../MOCK_DATA.json'
const SearchTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const styleObj = {
        fontSize: 40,
    }
    return ( 
        <div className="container">
           <div><h1 style={{display: "inline", fontSize: 40, textAlign:"left"}}>手机号</h1><input type="text" placeholder="请输入手机号.." className="form-control" style={{display: "inline", fontSize: 40, marginLeft: 10, marginTop:50, marginBottom:20, width:"60%"}}
            onChange={(e) => {
                setsearchTerm(e.target.value);
            }}
            />
            </div>
            <table className="table table-bordered">
                <thead className="thead-light">
                <tr style={styleObj}>
                    <th>门牌号</th>
                    <th>姓名</th>                  
                </tr>
                </thead>
                <tbody >
                    
                    {MockData.filter((val) => {
                        if ( searchTerm !== "" && searchTerm.length === 11 &&

                            val.phone_number.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
                            
                            
                        ){
                            return val;
                        }

                    }).map((m) => (
                        <tr style={styleObj} key={m.id}>
                            <td>{m.address}</td>
                            <td>{m.name}</td>                   
                            
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div> 
     );
}
 
export default SearchTable;