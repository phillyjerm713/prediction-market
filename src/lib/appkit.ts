import type { AppKitNetwork } from '@reown/appkit/networks'
import { polygonAmoy } from '@reown/appkit/networks'

export const projectId = process.env.REOWN_APPKIT_PROJECT_ID ?? ''
export const defaultNetwork = polygonAmoy
export const networks = [defaultNetwork] as [AppKitNetwork, ...AppKitNetwork[]]
