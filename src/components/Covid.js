// import moment from "moment";
import useFetch from "../customize/fetch";

const Covid = () => {

    // Khai báo biến
    const today = new Date(new Date().setHours(0,0,0,0)); // lấy ngày hiện tại
    const priorDate = new Date("2023-03-09T00:00:00.000Z");  // ngày 09-03-2023
    priorDate.setDate(priorDate.getDate() - 30);  // ngày 07-02-2023
    // const today = moment().startOf('day');
    //const priorDate = moment().subtract(30, 'day');  // 30 ngày trước tính từ ngày hôm nay
    

    // Lấy dữ liệu từ hàm useFetch
    const {data: dataCovid, isLoading, isError} 
        // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z');
        = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`);


    return (
        <div>
        <h3 style={{margin: '0', padding: '10px 0px'}}>Covid 19 tracking in Viet Nam</h3>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
            </thead>

            <tbody>
                { isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                    dataCovid.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Active}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                            </tr>
                        )
                    })
                }
                { isLoading === true && 
                    <tr> 
                        <td colSpan='5' style={{'textAlign': 'center'}}> {/* colSpan='5': tạo 1 hàng mới có merger 5 cột */}
                            isLoading...
                        </td>
                    </tr>
                }
                { isError === true && 
                    <tr> 
                        <td colSpan='5' style={{'textAlign': 'center'}}> {/* colSpan='5': tạo 1 hàng mới có merger 5 cột */}
                            Something wrong...
                        </td>
                    </tr>
                }
            </tbody>
        </table>
        </div>
        
    );
}

export default Covid;