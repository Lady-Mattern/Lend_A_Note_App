export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}

const setUser = user =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
    
export const handleLogin = ({ email, password }) => {
    if (email === `teacher.name@school.edu` && password === `pass`) {
        return setUser({
            name: `Jane Q. Teacher`,
            email: `teacher.name@school.edu`,
            school: `Awesome High School`,
            region: `Tinytown, NJ`,
            school_phone: `555-555-5555`,
        })
    }
    return false
}

export const isLoggedIn = () => {
    const user = getUser()

    return !!user.email
}

export const logout = callback => {
    setUser({})
    callback()
}

