import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);  // mặc định là ko có lỗi (false)
    
    // giống với componentDidMount (reactjs class)
    useEffect(() => { // tham khảo trên 'https://www.npmjs.com/package/axios'

        try{
            axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
            .then(function (response) {
                let data = response && response.data ? response.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');  // convert định dạng date
                        return item;
                    })
                    data = data.reverse();
                }
                setDataCovid(data);  // re-render
                setIsLoading(false); // load xong
                setIsError(false);  // load xong, ko có lỗi
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        }
        catch(e) {
            setIsError(true);  // có lỗi
            setIsLoading(false);  // load xong 
            // alert(e.message);  // VD: request failed with status code 404 (truy cấp ko tồn tại)
        }

    }, [])


    return (
        <>
        <h3>Covid 19 tracking in Viet Nam</h3>
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
        </>
        
    );
}

export default Covid;