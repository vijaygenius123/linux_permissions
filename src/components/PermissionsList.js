import React from 'react'
import PropTypes from 'prop-types'

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Custom Components
import Permission from './Permission'

function PermissionsList(props) {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12} md={4} justify="center" >
                <Typography variant="h4">
                    Self/Owner
          </Typography>
                <Permission />
            </Grid>
            <Grid item xs={12} md={4} justify="center" >
                <Typography variant="h4">
                    Group
          </Typography>
                <Permission />
            </Grid>
            <Grid item xs={12} md={4} justify="center" >
                <Typography variant="h4">
                    Others
          </Typography>
                <Permission />
            </Grid>
        </Grid>
    )
}

PermissionsList.propTypes = {

}

export default PermissionsList

