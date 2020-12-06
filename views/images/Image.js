class Image {
    constructor({dimens = undefined, url = ''}) {
        this.type = 'image'
        this.dimens = dimens
        this.url = url
    }
}

module.exports = Image