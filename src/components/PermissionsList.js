import React from 'react'
import PropTypes from 'prop-types'

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//Custom Components
import Permission from './Permission'

function PermissionsList(props) {
    const { updateValues, values } = props

    return (
        <Grid container spacing={6} justify="center" >
            <Grid item xs={12} md={4} >
                <Typography variant="h4">
                    Self/Owner
                </Typography>
                <Permission section="S" updateValues={updateValues} />
            </Grid>
            <Grid item xs={12} md={4}  >
                <Typography variant="h4">
                    Group
                </Typography>
                <Permission section="G" updateValues={updateValues} />
            </Grid>
            <Grid item xs={12} md={4} >
                <Typography variant="h4">
                    Others
                </Typography>
                <Permission section="O" updateValues={updateValues} />
            </Grid>
        </Grid>
    )
}

PermissionsList.propTypes = {

}

export default PermissionsList

