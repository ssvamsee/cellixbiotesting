import axios from "axios";
import { useEffect, useState } from "react";

function FilterYear(){
const [patents, setPatents] = useState();
useEffect(() => {
    const fetchData = async () => {
        const data = await axios.get('http://localhost:3004/patents');
        console.log(data);
        setPatents(data);
    };
    fetchData();
}, []);

}

export default FilterYear;