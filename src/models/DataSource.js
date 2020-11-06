class DataSource{

    static getBlogPost = () => {
        let ascii = (Math.random()*27)+65
        return "This a blogPost"+String.fromCharCode(ascii)
    }

    static getCommentList = () => {
        let count = Math.random()*10
        return "This is comment "+count
    }

}

export default DataSource