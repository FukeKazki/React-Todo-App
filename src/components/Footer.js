import React from 'react'
import {
    Toolbar,
    Typography,
    makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#4d4d4d',
        color: '#ffffff',
    },
    footerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const Footer = () => {
    const classes = useStyle()
    return (
        <footer className={classes.footer}>
            <Toolbar className={classes.footerContainer}>
                <Typography varient='h3' component='h3'>cc @fukke0906</Typography>
            </Toolbar>
        </footer>
    )
}

export default Footer
