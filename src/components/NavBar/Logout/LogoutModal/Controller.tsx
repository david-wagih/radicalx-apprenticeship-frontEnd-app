import { removeRememberCookies } from "../../../../features/LogIn/RememberMe/Controller"

export const logout = () => {
    removeRememberCookies()
}