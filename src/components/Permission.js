import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Permission(props) {
    const [read, setRead] = useState(false)
    const [write, setWrite] = useState(false)
    const [execute, setExecute] = useState(false)
    const { updateValues, section } = props;

    const setPropertyAndCallCalculate = (property, value) => {
        const newValue = !value;
        if (property === 'R') {
            setRead(newValue)
            updateValues(section, [newValue, write, execute])
        } else if (property === 'W') {
            setWrite(newValue)
            updateValues(section, [read, newValue, execute])
        } else if (property === 'X') {
            setExecute(newValue)
            updateValues(section, [read, write, newValue])
        }
    }

    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <Typography>R</Typography>
                    <Checkbox
                        checked={read}
                        onChange={() => setPropertyAndCallCalculate('R', read)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
                <Grid item>
                    <Typography>W</Typography>
                    <Checkbox
                        checked={write}
                        onChange={() => setPropertyAndCallCalculate('W', write)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
                <Grid item>
                    <Typography>X</Typography>
                    <Checkbox
                        checked={execute}
                        onChange={() => setPropertyAndCallCalculate('X', execute)}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Permission
