export function firstLetterToUpperCase(string) {
    const aos = string.split('')
    aos[0] = aos[0].toUpperCase()
    return aos.join('')
}

export function createPages(pages, pagesCount, currentPage) {
    if(pagesCount > 10) {
        if(currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage+5; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i) 
        }
    }
}