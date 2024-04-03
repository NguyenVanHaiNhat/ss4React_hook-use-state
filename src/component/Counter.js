import {useState} from "react";

export default function Counter(){
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    }

    return (
        <div style={{textAlign : 'center'}}>
            Giá trị count {count}
            <div>
                <button onClick={handleClick}>Tăng</button>
            </div>
        </div>
    )
}
