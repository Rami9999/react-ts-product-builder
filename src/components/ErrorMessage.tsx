interface IProps {
    message:string
}


const ErrorMessage  = ({message}:IProps) => {
    return (
        message ? <span className="block text-sm text-red-700 font-semibold">{message}</span>:null

    )
}

export default ErrorMessage;