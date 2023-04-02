// Mục đích của file này là lấy data về
// Rule: bắt buộc đầu hàm phải có 'use..' 

// Khi có quá nhiều request  (chuyển trang nhiều) cần cancal request

import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";


const useFetch = (url) => {

    // Khai báo các biến cần sử dụng
    const [data, setData] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);  // mặc định là ko có lỗi (false)


    // giống với componentDidMount (reactjs class)
    useEffect(() => { 
        const controller = new AbortController(); // <-- B1 để cancel reqest khi chuyển trang

        // Cách 1: tham khảo trên 'https://www.npmjs.com/package/axios'
        axios
            .get(url, {
                signal: controller.signal // <-- B2 để cancel reqest khi chuyển trang
            })
            .then(function (response) {
                let data = response && response.data ? response.data : [];
                if (data && data.length > 0) {
                    data.map(item => {
                        item.Date = moment(item.Date).format('DD/MM/YYYY');  // convert định dạng date
                        return item;
                    })
                    data = data.reverse();
                }
                setData(data);  // re-render
                setIsLoading(false); // load xong
                setIsError(false);  // load xong, ko có lỗi
                
            })
            .catch(function (error) {
                if (axios.isCancel(error)) {  //  canceled
                    console.log('>> Error request cancel: ',error.message);
                } else {  // ko cancel thì load thông báo 
                    setIsError(true);  // có lỗi
                    setIsLoading(false);  // load xong 
                    console.log('>> Not error request cancel: ', error);
                }
            })
            .finally(function () {
            });   
        
        // cleanup useEffect
        return () => {
            controller.abort()  // <-- B3 để cancel reqest khi chuyển trang
        }
    }, [url]);   // một khi url thay đổi, sẽ fetch lại data

    return {data, isLoading, isError};
}

export default useFetch;