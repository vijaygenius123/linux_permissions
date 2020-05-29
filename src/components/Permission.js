import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Permission(props) {
    const [owner, setOwner] = useState(false)
    const [group, setGroup] = useState(false)
    const [others, setOthers] = useState(false)
    const { calculateCommand } = props;

    const setPropertyAndCallCalculate = (section, value) => {
        console.log(section, value)

    }

    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <Typography>R</Typography>
                    <Checkbox
                        checked={owner}
                        onChange={() => setPropertyAndCallCalculate('S', owner)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
                <Grid item>
                    <Typography>W</Typography>
                    <Checkbox
                        checked={group}
                        onChange={() => setPropertyAndCallCalculate('G', group)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
                <Grid item>
                    <Typography>X</Typography>
                    <Checkbox
                        checked={others}
                        onChange={() => setPropertyAndCallCalculate('O', others)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Permission
