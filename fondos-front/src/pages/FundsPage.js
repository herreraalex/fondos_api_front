import React, { useState, useEffect  } from "react";
import Table from "../components/Table/Table";

const FundsPage = () => {

    const [funds, setfunds] = useState([])
    const [client, setclient] = useState([])
    const [recovery, setRecovery] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8000/funds/get-funds')
            .then((response) => {
                return response.json()
            })
            .then((funds) => {
                setfunds(funds)
                setRecovery(true)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/clients/get-client/1')
            .then((response) => {
                return response.json()
            })
            .then((client) => {
                setclient(client)
                setRecovery(true)
            })
    }, [])


    function showTable(){
        return(
            <div>
                <Table funds={funds}></Table>
            </div>
        )
    }


    if (recovery)
        return showTable()
    else
        return (<div>recuperando datos...</div>)

};

export default FundsPage;
