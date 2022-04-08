import React from  'react'
import MaterialTable from 'material-table'


const Table3=()=>{

    const { useState } = React;
    
  
    const [columns, setColumns] = useState([
      { title: 'Supplier', 
      field: 'name', 
      lookup: { 34: 'Priyanka', 63: 'Alia', 24:'Taylor' },
      
    },  
    { title: 'Network Address',
           field: 'networkAddress',
           type: 'boolean'
          },
          {title:'Dialed Access Number', 
          field:'number', 
          type : 'boolean',
        },
      {title: 'Date & Time', field:'Time'},
        
    ]);
  
    const [data, setData] = useState([
      // { name: 34, networkAddress: true , number: true, time : '12:00' },
      //      { name: 63 , networkAddress: true , number: false,  time: '11:00'},
      //      {name: 24 , networkAddress: true ,number: false, time:'16:00'}
     
    ]);
  
    return (
      <MaterialTable
        title="ROUTING PLAN ACTIVITY"
        columns={columns}
        data={data}actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          }
         ]}
        options={{
          
          actionsColumnIndex: -1,
          
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF'
            }
          }}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
       
      />
      
    )
  } 
  export default Table3;
  



