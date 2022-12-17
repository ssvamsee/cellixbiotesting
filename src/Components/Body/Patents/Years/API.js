import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Data(){
    const [patents, setPatents] = useState("");
    const {years} = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData (){
            setLoading(true);
            try {
                const data = await axios.get(`http://localhost:3003/patents/years/${years}`);
                setPatents(data.data);
            } catch (err) {}
            setLoading(false);
        };
      fetchData();
    }, []);
}
export default Data;