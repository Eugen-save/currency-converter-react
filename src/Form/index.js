import "./style.css";

const Form = ({ input, button, body, onFormSubmit }) => {

    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <p>
                {input}
            </p>
            <p>
                {body}
            </p>
            {button}
        </form>)
};

export default Form;