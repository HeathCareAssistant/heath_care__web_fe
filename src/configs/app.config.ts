export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string[]
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const appConfig: AppConfig = {
    apiPrefix: import.meta.env.VITE_DRUG_URL as string,
    authenticatedEntryPath: ['/admin', ''],
    unAuthenticatedEntryPath: '/home',
    tourPath: '/',
    locale: 'en',
    enableMock: false,
}

export default appConfig
