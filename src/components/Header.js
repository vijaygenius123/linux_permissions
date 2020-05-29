import React from 'react'
import PropTypes from 'prop-types'

//MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Header(props) {
    return (
        <Grid container justify="center">
            <Grid item xs={12} md={12} >
                <Typography variant="h1">
                    Linux Permissions
            </Typography>
            </Grid>
        </Grid>
    )
}

Header.propTypes = {

}

export default Header

