// Styles
import style from "./style.module.scss";

const SimpleModal = ({ id='modal', children}) => {
  
	return (
		<div>
			<div id={id} className={style.modal}>
				<div className={style.container}>
					
					<div className={style.content}>
						{children}
					</div>
					
				</div>
			</div>
		</div>

	);
}

export default SimpleModal;