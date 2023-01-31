const styles = {
    title: {
        marginBottom: '30px'
    }
}

const Title = ({ children }) => {
    return(
        <h1 style={styles.title}>
            {children}
        </h1>
    )
}

export default Title