import {useEffect, useState} from "react";

export function Selector(){
    let [selected, setSelected] = useState("0");
    let [valueSelected, setValueSelected] = useState("");

    const choice = e => {
        switch (+e.target.value) { // e.target.value nó sẽ lấy kiểu string
            case 0:
                setValueSelected("Java");
                break;
            case 1:
                setValueSelected("Angular");
                break;
            case 2:
                setValueSelected("Javascript");
                break;
            case 3:
                setValueSelected("Php");
                break;
            default:
        }
    };


    return (
        <div>
            Khóa học :
            <select
                onChange={e => {
                    choice(e);
                }}
            >
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">Php</option>
            </select>
            <h2>Bạn đã chọn : {valueSelected}</h2>
        </div>
    )
}