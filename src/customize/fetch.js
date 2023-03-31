// Mục đích của file này là lấy data về
// Rule: bắt buộc đầu hàm phải có 'use..' 


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
        try{

            // Cách 1: tham khảo trên 'https://www.npmjs.com/package/axios'
            axios.get(url)
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
                console.log(error);
            })
            .finally(function () {
            });

            // Cách 2: 
            // async function fetchData() {
            //     let res = await axios.get(url);
            //     let data = (res && res.data) ? res.data : []; 
            //     if (data && data.length > 0) {
            //         data.map(item => {
            //             item.Date = moment(item.Date).format('DD/MM/YYYY');
            //             return item;
            //         })
            //         data = data.reverse();  // đảo ngược chuỗi
            //     }
            //     setData(data);
            //     setIsLoading(false);
            //     setIsError(false);
            // }

            // fetchData();
        }
        catch(e) {
            setIsError(true);  // có lỗi
            setIsLoading(false);  // load xong 
            // alert(e.message);  // VD: request failed with status code 404 (truy cấp ko tồn tại)
        }
    }, []);

    return {data, isLoading, isError};
}

export default useFetch;