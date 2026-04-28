import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { networks, projectId } from '@/lib/appkit'

export const wagmiAdapter = new WagmiAdapter({
  ssr: false,
  projectId,
  networks,
})

export const wagmiConfig = wagmiAdapter.wagmiConfig
