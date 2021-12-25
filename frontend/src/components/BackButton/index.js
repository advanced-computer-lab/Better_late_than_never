// BackButton.js
import React from 'react'
import Button from '@material-ui/core/Button'

export default function BackButton({ action, children, ...props }) {
    return (
        <Button {...props} onClick={action}>
            {children}
        </Button>
    )
}
