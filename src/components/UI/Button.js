import Link from "next/link";
import classes from "./Button.module.css";


function Button({ href, onClick, children }) {
    if (href) {
        return (<Link href={href} className={classes.btn}>
            {children}
        </Link>);
    }
    return <button className={classes.btn} onClick={onClick}>
        {children}
    </button>
}

export default Button;