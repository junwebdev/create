import { useState } from "react";
import MockData from '../MOCK_DATA.json'
const SearchTable2 = () => {
    const [searchTerm2, setsearchTerm2] = useState("");
    const styleObj = {
        fontSize: 35,
    }
    return ( 
        <div className="container">
           <input type="text" placeholder="请输入姓名.." className="form-control" style={{fontSize: 40, marginTop:50, marginBottom:20, width:"100%"}}
            onChange={(e) => {
                setsearchTerm2(e.target.value);
            }}
            />
            
            <table className="table table-bordered">
                <thead className="thead-light">
                <tr style={styleObj}>
                    <th>门牌号</th>
                    <th>手机号</th>                  
                </tr>
                </thead>
                <tbody >
                    
                    {MockData.filter((val) => {
                        if ( searchTerm2 !== "" && searchTerm2.length >= 2 &&

                            val.name.toString().toLowerCase().includes(searchTerm2.toString().toLowerCase())
                            
                            
                        ){
                            return val;
                        }

                    }).map((m) => (
                        <tr style={{fontSize: 20}} key={m.id}>
                            <td>{m.address}</td>
                            <td>{m.phone_number}</td>                   
                            
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div> 
     );
}
 
export default SearchTable2;