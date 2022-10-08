import { AppShell, Code, Group, Header, Navbar, ScrollArea } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { LinksGroup } from '../../components/Navigation/LinksGroup'
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
} from '@tabler/icons';
const mockdata = [
    { label: 'Dashboard', icon: IconGauge },
    {
        label: 'Market news',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            { label: 'Overview', link: '/' },
            { label: 'Forecasts', link: '/' },
            { label: 'Outlook', link: '/' },
            { label: 'Real time', link: '/' },
        ],
    },
    {
        label: 'Releases',
        icon: IconCalendarStats,
        links: [
            { label: 'Upcoming releases', link: '/' },
            { label: 'Previous releases', link: '/' },
            { label: 'Releases schedule', link: '/' },
        ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics },
    { label: 'Contracts', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
    {
        label: 'Security',
        icon: IconLock,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];


const MainLayout = () => {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
    return (
        <AppShell padding="md"
            navbar={<Navbar  p="xs" width={{ base: 300 }}>
               
                <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
                    <div >{links}</div>
                </Navbar.Section>

            
            </Navbar>}
            header={<Header height={60} p="xs"> <Navbar.Section >
            <Group position="apart">
                <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
            </Group>
        </Navbar.Section></Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}>

            <Outlet /></AppShell>
    )
}

export default MainLayout