const styles = {
    paragraph: {
        textAlign: 'justify',
    }
}

const Paragraph = ({ children }) => {
    return(
        <p style={styles.paragraph}>
            {children}
        </p>
    )
}

export default Paragraph