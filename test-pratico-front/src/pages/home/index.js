// Packages
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import List from '../../components/List';
import Form from '../../components/Form';
import Modal from '../../components/Modal';

// Utils
import { handleNewUser, handleDeleteUser, handleCancel, getUserList } from "./utils";

// Styles
import style from "./style.module.scss";

const Home = () => {
    const dispatch = useDispatch();
    
    const users = useSelector(state => state.users);
    const modalIsVisible = useSelector(state => state.modalIsVisible);

    const handleGetUser = useCallback(() => {
        getUserList(dispatch);
    },[dispatch]);

    useEffect(() => {
        if(users.length === 0) {
            handleGetUser()
        }
    },[handleGetUser, users])

    return (
        <div className={style.container}>
            <List data={users} onDelete={(values)=> handleDeleteUser(dispatch, values)}/>

            <div className={style.buttonContainer}>
                <button onClick={()=> dispatch({ type: "TOGGLE_MODAL"})} className={style.addButton}>
                    Adicionar novo
                </button>
            </div>

            {modalIsVisible && (
                <Modal>
                    <h1>Adicionar novo usuário</h1>
                    <Form onCreate={(values)=> handleNewUser(dispatch, values)}
                        onCancel={(values)=> handleCancel(dispatch, values)} />
                </Modal>
            )}
        </div>
    )
}

export default Home;