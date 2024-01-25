
export interface IConfig {
    port: number,
    saltRounds: number,
    jwtAccessSecret: string,
    jwtRefreshSecret: string,
    accessExpire: string,
    refreshExpire: string
}