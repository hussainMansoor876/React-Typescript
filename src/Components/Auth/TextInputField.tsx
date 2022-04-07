
import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { alpha, styled } from '@mui/material/styles'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

const TextInputField = styled((props: TextFieldProps) => (
    <TextField
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 2,
        backgroundColor: 'white',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
            border: '1px solid rgba(0, 0, 0, 0.3)'
        },
        '&.Mui-error': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
            border: '1px solid #FF2400'
        }
    }
}))



export default TextInputField