class Movie {
    constructor (name, rating, description, imagen_f, imagen_l, clasificacion, stars)  {
        this.nombre = name
        this.rating = rating
        this.description = description
        this.fondo = imagen_f
        this.tarjeta = imagen_l
        this.clasificacion = clasificacion
        this.stars = stars
    }

    toHTML_recommended(id) {
        if ( this.stars === 1 ) {
            return `
                <div class="show" id="${id}" onclick="selectedMovie(${id})">
                    <img class="showImage" src="${this.tarjeta}" alt="">
                    <div class="rate_show">
                        <p>Ratings:</p>
                        <div>
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="save_show" src="./Icons/baseline_bookmark_border_white_48dp.png" alt="">
                        </div>
                    </div>
                </div>
                `
        } else if ( this.stars === 2 ) {
            return `
                <div class="show" id="${id}_recommended" onclick="selectedMovie(${id})">
                    <img class="showImage" src="${this.tarjeta}" alt="">
                    <div class="rate_show">
                        <p>Ratings:</p>
                        <div>
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="save_show" src="./Icons/baseline_bookmark_border_white_48dp.png" alt="">
                        </div>
                    </div>
                </div>
                `
        } else if ( this.stars === 3 ) {
            return `
                <div class="show" id="${id}" onclick="selectedMovie(${id})">
                    <img class="showImage" src="${this.tarjeta}" alt="">
                    <div class="rate_show">
                        <p>Ratings:</p>
                        <div>
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="save_show" src="./Icons/baseline_bookmark_border_white_48dp.png" alt="">
                        </div>
                    </div>
                </div>
                `
        } else if ( this.stars === 4 ) {
            return `
                <div class="show" id="${id}" onclick="selectedMovie(${id})">
                    <img class="showImage" src="${this.tarjeta}" alt="">
                    <div class="rate_show">
                        <p>Ratings:</p>
                        <div>
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star_null" src="./Icons/baseline_star_outline_white_48dp.png" alt="">
                            <img class="save_show" src="./Icons/baseline_bookmark_border_white_48dp.png" alt="">
                        </div>
                    </div>
                </div>
                `
        } else if ( this.stars === 5 ) {
            return `
                <div class="show" id="${id}" onclick="selectedMovie(${id})">
                    <img class="showImage" src="${this.tarjeta}" alt="">
                    <div class="rate_show">
                        <p>Ratings:</p>
                        <div>
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="rate_star" src="./Icons/baseline_star_white_48dp.png" alt="">
                            <img class="save_show" src="./Icons/baseline_bookmark_border_white_48dp.png" alt="">
                        </div>
                    </div>
                </div>
                `
        }
        
    }

    toHTML_trending(id) {
        return `
        <div class="show" id="${id}" onclick="selectedMovie(${id})">
            <img class="showImage" src="${this.tarjeta}" alt="">
        </div>
        `
    }

    toBanner() {
        bannerTittle.innerHTML = this.nombre
        bannerRatings.innerHTML = `(${this.rating} ratings)`
        bannerDescription.innerHTML = this.description
        bannerClasification.innerHTML = this.clasificacion
        bannerImage.style.backgroundImage=`url(${this.fondo})`
    }
}