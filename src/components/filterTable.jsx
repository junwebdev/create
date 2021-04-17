import { useState } from "react";
import MockData from '../MOCK_DATA.json'
const SearchTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    const styleObj = {
        fontSize: 50,
    }
    return ( 
        <div className="container">
            <input type="text" placeholder="Search.." className="form-control" style={{marginTop:50, marginBottom:20, width:"40%"}}
            onChange={(e) => {
                setsearchTerm(e.target.value);
            }}
            />
            <table className="table table-bordered">
                <thead className="thead-light">
                <tr style={styleObj}>
                    <th>门牌号</th>
                    <th>姓名</th>
                    <th>手机号</th>
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
                            <td>{m.phone_number}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div> 
     );
}
 
export default SearchTable;