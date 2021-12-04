import React from 'react';
import { Link,Route  } from 'react-router-dom';
import Update from './Update';

class List extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[]
        };       
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/api/employees/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    deleteData(id){
        fetch('http://127.0.0.1:8000/api/employees/'+id+'/',{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });
    }

    sendValue(id){
        this.history.push({
            pathname: 'update/',
            search: '?query=Update',
            state: { id: id }
          })
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        const empData=this.state.data;
        console.log(empData)
        const rows=empData.map((emp)=>
            // your link creation

            <tr key={emp.id}>
                <td>{emp.full_name}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>
                <td>{emp.address}</td>
                <td>                                       
                    <Link to={'update/'+emp.id} className="btn btn-info mr-2">Update</Link>
                    <button onClick={()=>this.deleteData(emp.id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }


}

export default List;