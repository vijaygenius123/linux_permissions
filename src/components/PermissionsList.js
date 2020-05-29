import React from 'react'
import PropTypes from 'prop-types'

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Custom Components
import Permission from './Permission'

function PermissionsList(props) {
    const { calculateCommand } = props
    return (
        <Grid container spacing={6} justify="center" >
            <Grid item xs={12} md={4} >
                <Typography variant="h4">
                    Self/Owner
                </Typography>
                <Permission calculateCommand={calculateCommand} />
            </Grid>
            <Grid item xs={12} md={4}  >
                <Typography variant="h4">
                    Group
                </Typography>
                <Permission calculateCommand={calculateCommand} />
            </Grid>
            <Grid item xs={12} md={4} >
                <Typography variant="h4">
                    Others
                </Typography>
                <Permission calculateCommand={calculateCommand} />
            </Grid>
        </Grid>
    )
}

PermissionsList.propTypes = {

}

export default PermissionsList

