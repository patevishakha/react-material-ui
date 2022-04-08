import React from  'react'
import MaterialTable from 'material-table'


const Table1=()=>{
  


    const { useState } = React;
    
    
    const [columns, setColumns] = useState([
      { title: 'Number Plan Name', field: 'name'},
   
      
    ]);
    
   
    const [data, setData] = useState([
      { name: 'Priyanka' },
      // { name: 'Kajol' },
    ]);
  
  
    return (
      <MaterialTable 
        title="LIST OF NUMBER ROUTING PLANS"
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
  export default Table1;