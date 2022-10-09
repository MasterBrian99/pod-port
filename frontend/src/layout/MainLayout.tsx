import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppShell, Navbar, Header, ScrollArea } from '@mantine/core'

const MainLayout = () => {
  return (
    <div>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            <Navbar.Section mt="xs">
              <h1>Hello</h1>
            </Navbar.Section>

            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
              {/* scrollable content here */}
            </Navbar.Section>
          </Navbar>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.midDark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        {/* Your application here */}

        <Outlet />
      </AppShell>
    </div>
  )
}

export default MainLayout
