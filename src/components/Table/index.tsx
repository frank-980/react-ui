import * as React from 'react';
interface Icolumns{
    title?:string;
    dataIndex?:string;
    key?:string;
}
interface ITable{
    data:any;
    columns:Icolumns[];
}

const Table:React.FC<ITable> = (props)=>{
    const { data,columns } = props;
    return (
        <table className="sxd-table" style={{width:"100%",borderCollapse:"collapse"}}>
            <thead>
                <tr>
                    {columns.map((col:Icolumns)=>{
                        return (
                            <th className="header-col" key={col.dataIndex}>{col.title}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((row:any)=>{
                    return (
                        <tr className="body-row" key={row.key}>
                            {columns.map((col:any)=>{
                                return (
                                    <td className="body-col" key={col.dataIndex}>{row[col.dataIndex]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default Table