// Packages
import { useEffect, useState } from "react";

// Utils
import { tableColumns, detailRows } from "./utils";

// Styles
import style from "./style.module.scss";

const List = (props) => {
    const { data, onDelete } = props;

    const [selectedCell, setSelectedCell] = useState({data: [], action: ""});
    
    const handleClickCell = (selectedCellId, action) => {
        setSelectedCell({
            data: data.filter(data => data.id === selectedCellId),
            action: action
        });
        
        return selectedCell;
    }

    const renderHeaders = () => {
        const headerNames = tableColumns.map(value => value.name);
        
        return (
            <tr>
                {headerNames.map((name, index) => {
                    return <th key={index}>{name}</th>
                })}

                <th>Ações</th>
             </tr>
        )
    }

    const renderRows = () => {
        return data.map((data) => {
            const { id } = data;

            return (
                <tr key={id}>
                    {tableColumns.map((column)=>{
                        return (
                            <td>{data[column.field]}</td>
                        )
                    })}
                    <td>
                        <button onClick={()=> handleClickCell(id, "details")} className={style.detailsButton}>Detalhes</button>
                        <button onClick={()=> handleClickCell(id, "delete")} className={style.deleteButton}>Excluir</button>
                    </td>
                </tr>
            )
        })
    }

    const renderDetails = () => {
        return selectedCell.data && selectedCell.action === "details" && (
                selectedCell.data.map((data) => {
                    return (
                        detailRows.map((row)=>{
                            return (
                                <div>
                                    <span>{row.name}</span>
                                    <p>{data[row.field]}</p>
                                </div>
                            )
                        })
                    )
                })
        )
    }

    useEffect(() => {
        if (selectedCell && selectedCell.action === "delete"){
            onDelete(selectedCell.data[0]);
            setSelectedCell({data: [], action: ""});
        }
    }, [selectedCell, onDelete])
    
    return (
        <div className={style.container}>
            <table>
                <thead>
                    {renderHeaders()}
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
            <div className={style.detailsContainer}>
                {renderDetails()}
            </div>
        </div>
    )

}

export default List;