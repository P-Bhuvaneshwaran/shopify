import React, { useState } from "react";
import '../../Styles/dashboard.css'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
const Dashboard = () =>{
    const [activepage, setActivePage] = useState('null');
    function showAddPage(){
        setActivePage('add');
    }
    function showEditPage(){
        setActivePage('edit');
    }
    return(
        <div className="dashboardPage">
            <div className="dashboardPageCont">
                <div className="dashboardPageContTop-row">
                    <h2>Crud</h2>
                    <div className="ContTop-row-crud-btn">
                        <button onClick={showAddPage}>Add Product</button>
                        <button onClick={showEditPage}>Edit Product</button>
                    </div>
                </div>
                <div className="dashboardPageContTop-row">
                    {activepage === 'add' && <AddProduct/>}
                    {activepage === 'edit' && <EditProduct/>}
                    {/* {activepage === 'edit' ? <EditProduct/> : <AddProduct/>} */}
                </div>

            </div>
        </div>
    )
}

export default Dashboard;