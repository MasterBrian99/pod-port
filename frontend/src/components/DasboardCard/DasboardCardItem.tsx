import { Box } from '@mantine/core'
import React from 'react'

const DasboardCardItem = () => {
    return (
        <Box>
            <Box
            m={12}
                className='card-shadow'
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    textAlign: 'center',
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    },
                    width:'12rem',
                    height:'6rem',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                })}
            >
                1
            </Box>
        </Box>
    )
}

export default DasboardCardItem