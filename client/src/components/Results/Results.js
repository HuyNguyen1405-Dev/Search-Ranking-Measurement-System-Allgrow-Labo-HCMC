import React from 'react'
import './Results.css';
import Table from 'react-bootstrap/Table';

const Results = () => {
    return (
        <div className="container_results">
            <div className="results">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className='tdTable'>Keyword</th>
                            <th className='tdTable' colSpan={2}>Google</th>
                            <th className='tdTable' colSpan={2}>Yahoo</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Rank</th>
                            <th>Search Results</th>
                            <th>Rank</th>
                            <th>Search Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Results