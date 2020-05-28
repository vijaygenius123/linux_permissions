import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

function Permission() {
    const [owner, setOwner] = useState(false)
    const [group, setGroup] = useState(false)
    const [others, setOthers] = useState(false)

    return (
        <div>
            <Checkbox
                checked={owner}
                onChange={() => setOwner(!owner)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                checked={group}
                onChange={() => setGroup(!group)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <Checkbox
                checked={others}
                onChange={() => setOthers(!others)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    )
}

export default Permission
