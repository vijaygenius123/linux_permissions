import React from 'react'
import PropTypes from 'prop-types'

// MaterialUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function Command(props) {
    const { command } = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4">
                    Command To Run - {command}
                </Typography>
            </Grid>
        </Grid>
    )
}

Command.propTypes = {

}

export default Command

