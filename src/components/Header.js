import React from 'react'
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    button: {
        color: '#ffffff'
    }
}))

const Header = () => {
    const classes = useStyle()
    return (
        <AppBar position='static' component='header'>
            <Toolbar>
                <Typography varient='h1' component='h1'
                            className={classes.title}>Hookつかってきれいなコードで書いたTodoアプリ</Typography>
                <Button href='https://github.com/FukeKazki/React-Todo-App'
                        className={classes.button}>GitHub</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
