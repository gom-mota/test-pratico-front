// Packages
import { useCallback, useEffect, useState } from "react";

// Utils
import { fields } from "./utils";

// Styles
import style from "./style.module.scss";

const Form = (props) => {
    const { onCreate, onCancel } = props;
    
    const [fieldValues, setFieldValues] = useState();
    const [formSubmited, setFormSubmited] = useState(false);

    const handleChange = (e) => {
        setFieldValues({
            ...fieldValues,
            [e.target.name]: e.target.value.trim()
        })
    }
    
    const renderFields = () => {
        return (
            fields.map((field)=>{
                return (
                    <>
                        <label for={field.name}>{field.label}</label>
                        <input name={field.name} id={field.name} type={field.type}
                        onChange={handleChange} placeholder={field.placeholder} required/>
                    </>
                )
            })
        )
    }

    const handleSubmit = useCallback((e) => {        
        setFormSubmited(true);
        e.preventDefault();
    }, [])

    useEffect(() => {
        if(formSubmited){
            onCreate(fieldValues);
            setFormSubmited(false);
        }
    }, [fieldValues, formSubmited, onCreate, handleSubmit])

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                {renderFields()}
                <div className={style.containerButtons}>
                    <button type="submit" className={style.saveButton}>
                        Gravar
                    </button>
                    
                    <button type="button" onClick={()=> onCancel()} className={style.cancelButton}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;