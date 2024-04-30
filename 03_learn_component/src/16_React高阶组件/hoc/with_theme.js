import ThemeContext from "../context/theme_context";

function with_theme(WrappedComponent){
    return (props) => {
        return (
            <ThemeContext.Consumer>
                {
                    value => <WrappedComponent {...value} {...props}/>
                    
                }
            </ThemeContext.Consumer>
        )
    }
}

export default with_theme;