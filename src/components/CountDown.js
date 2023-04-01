import React from "react";
import { useEffect, useState } from "react";
import './CountDown.scss';


// Tạo component dạng 'class'
class CountDownClass extends React.Component {
    // Tạo 1 biến state để số hiển thị liên tục (state là 1 object)
    state = {
        count: 10
    }

    // hàm componentDidMount được chạy sau khi ta render lần đầu (live cirle đầu tiên của web)
    componentDidMount() {
        /* hàm setTimeout (chạy 1 lần) nhận 2 tham số: function và thời gian nó chạy */
        // setTimeout( () => {
        //     console.log('me')
        // }, 1000);  
        
    
        // hàm setInterval (chạy nhiều lần)
        this.timer = setInterval(() => {  
            this.setState({
                count: this.state.count-1
            })
        }, 1000);
    }

    // preProps (cái quá khứ của props), preState (giá trị cũ của state)
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count && this.state.count === 0) {  // khi biến count == 0 thì clear timer
            if(this.timer) {
                clearInterval(this.timer); // clear timer
                // this.props.onTimesup();  // hiển thị thông báo alert
            }
        }
    }
    
    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }
}


// Viêt theo hooks
const CountDownHook = (props) => {
    const [count, setCount] = useState(10);

    useEffect( () => {
        if (count === 0) {
            props.onTimesup();
            return; // nếu count == 0 sẽ return (ko chạy nữa)
        }

        let timer = setInterval(() => {
            setCount(count-1);
        }, 1000);
        
        // Khi có return 1 function thì hooks sẽ hiểu là mỗi lần useEffect đc chạy, nó sẽ chạy cả đoạn code bên trên và bên dưới
        return () => {
            clearInterval(timer);
        }
    }, [count]);  

    return (
        <div>{count} hooks</div>
    )
}

export  {CountDownClass, CountDownHook};