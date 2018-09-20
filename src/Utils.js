export const getId = url => {
    url = url.split('/')
    return Number(url[url.length - 1] || url[url.length - 2])
}

export const getInitials = name => {
    name = name.toUpperCase().replace('-', '').split(' ')
    if (name.length >= 2)
        return name[0][0] + name[1][0]
    return name[0][0] + name[0][1]
}