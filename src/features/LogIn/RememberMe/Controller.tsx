let rememberMe: boolean

export const handleIsChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
        rememberMe = true
    }
    else{
        rememberMe = false
    }
}

//This method should be called after successful login
export const setStoredVar = () => {
    if(rememberMe){
        localStorage.setItem('rememberFlag', JSON.stringify(true))
    }
}

export const getStoredVar = () => {
    const rememberFlag = JSON.parse(localStorage.getItem('rememberFlag') || "false")
    console.log(rememberFlag)
    return rememberFlag
}

//This method should be called at logout
export const removeStoredVar = () => {
    localStorage.removeItem('rememberFlag')
}