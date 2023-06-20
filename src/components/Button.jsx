import './Button.css'
export default function Button({styles,dispatch,actionType,children}) {
    return (
        <button style={styles} onClick={()=>dispatch(actionType())} >
            {children}
        </button>
    )
}