import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header className='header'>
            <h1 style={{ color: 'Brown', backgroundColor: 'black'}}>{title}</h1>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Recipe Engine',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
