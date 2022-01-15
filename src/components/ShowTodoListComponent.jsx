import React from 'react'

///////////////////////////////////////////////////////////////
//  SHOW TO DO LIST COMPONENT
///////////////////////////////////////////////////////////////

const ShowTodoListComponent = () => {
    return (
        <div className="bg-white p-2 rounded">
            <h2>To Do List:</h2>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col-3">Task</th>
                        <th scope="col">Complete</th>
                        <th scope="col">Action</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Item to be done</td>
                        <td>CheckBox</td>
                        <td>Delete Button</td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ShowTodoListComponent
