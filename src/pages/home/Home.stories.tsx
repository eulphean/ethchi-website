import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import Home from './Home'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { WagmiConfig } from 'wagmi'
import wagmiConfig from '../../wagmiConfig'

const meta: Meta<typeof Home> = {
    title: 'Pages/Home/Home Page',
    component: Home,
}

export default meta

type Story = StoryObj<typeof Home>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <WagmiConfig config={wagmiConfig}>
                <Navbar />
                <Home />
                <Footer />
            </WagmiConfig>
        </HashRouter>
    )
}
