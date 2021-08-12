

const Form = props => {
    return (
        <form onSubmit={props.getFacts} style={{ marginBottom: '2rem'}}>
            <input className='form__input' type='text' name='beverage' />
            <button className='form__button'>Search</button>
        </form>
    )
}

export default Form
