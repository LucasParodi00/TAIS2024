import { Box } from "@mui/material"



export const LayoutContenedor = ({ children }) => {
    return (
        <Box
            component='section'
            margin='0 auto'
            sx={{
                backgroundColor: '#f1f1f1',
                padding: '10px',
                width: '100%',
                borderRadius: '15px',
                boxShadow: '0 0 10px 1px #f2f2f2'
            }}

        >
            {children}
        </Box >
    )
}