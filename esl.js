
export const body = document.body

export class Elmt {

    constructor(type, id = null, classList = []) {
        this.e = document.createElement(type)

        if (id) this.e.id = id

        classList.forEach((className) => {
            this.e.classList.add(className)
        })


        return this.e
    }

    static id(id) {
        return document.getElementById(id)
    }


    append(element) {
        this.append(element)
    }


}

export class Text extends Elmt {
    constructor(text, heading = "span", id = null, classList = []) {

        let s = super("h" + heading)
        if (heading == "span" || heading == "p") {
            s = super(heading, id, classList)
        }

        this.innerText = text

        return s

    }
}

export class Div extends Elmt {
    constructor(id = null, classList = []) {
        return super("div", id, classList)
    }
}

export class Button extends Elmt {
    constructor(label, id = null, classList = []) {
        const s = super("button", id, classList)

        this.e.innerText = label

        return s

    }
}

export class Link extends Elmt {
    constructor(label, href, id = null, classList = []) {
        const s = super("a", id, classList)

        this.e.innerText = label
        this.e.href = href

        return s

    }
}

export class Option extends Elmt {
    constructor(label, id = null, classList = []) {
        const s = super("option", id, classList)

        this.innerText = label

        return s

    }
}

export class Dropdown extends Elmt {
    constructor(id = null, classList = []) {
        const s = super("select", id, classList)

        return s
    }
}

export class Img extends Elmt {
    constructor(src, id = null, classList = []) {
        const s = super("img", id, classList)

        this.src = src

        return s
    }
}

export class Item extends Elmt {
    constructor(label = null, image = null, id = null, classList = []) {
        classList.push("item")

        const s = super("div", id, classList)
        if (image) {
            this.append(new Img(image))
        }

        if (label) {
            this.append(new Text(label, "3"))
        }

        return s
    }
}

export class Utils {
    static redirect(url) {
        window.location.href = url
    }
}