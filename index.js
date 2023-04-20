const contenedor_recommended = document.getElementById("recommended")
const contenedor_trending = document.getElementById("trending")
const bannerTittle = document.getElementById("bannerTittle")
const bannerRatings = document.getElementById("bannerRatings")
const bannerDescription = document.getElementById("bannerDescription")
const bannerClasification = document.getElementById("bannerClasification")
const bannerImage = document.getElementById("bannerImage")

const m1 = new Movie ("Star vs las fuerzas del mal", 3.5, "Después de luchar contra muchos monstruos peligrosos, Star Butterfly viene a la Tierra para vivir con una familia.", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4ECBEB8E805B6CC6C0F020FD8055E3D954756F46C0074EDF1EC587C995F1B1DF/scale?width=1200&aspectRatio=1.78&format=jpeg", "https://m.media-amazon.com/images/M/MV5BYmUxYWJkZGQtY2FmYS00YzM2LWJiMGQtODY5YTdjYmVkM2Y5XkEyXkFqcGdeQXVyNzQzNTI4MTM@._V1_FMjpg_UX1000_.jpg","9+", 3)
const m2 = new Movie ("Stranger things", 4.9, "Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.", "https://metro.co.uk/wp-content/uploads/2022/06/T_6_Unit_02910_R-413b.jpg?quality=90&strip=all", "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==","16+", 5)
const m3 = new Movie ("Lucifer", 4.5, "Harto del infierno, Lucifer abandona su trono en el averno y se marcha a Los Ángeles, donde empieza a trabajar como detective de homicidios.", "https://occ-0-448-2773.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeFYtLG_NLWAlFT3z_IgAqvNy7j1-Y54dz8W-2vWI5pLl6ehREXrnsKhycRwArYvCwmOwFEwSoTDarrRXAmmSp01KEsNZCW3SR4J.jpg?r=f6c", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/02/lucifer-serie-tv-cartel.jpg?itok=uC0s67xh","13*", 4)
const m4 = new Movie ("Emily in Paris", 4.2, "Emily Cooper, una joven ejecutiva de marketing de Chicago, es contratada para proporcionar una perspectiva estadounidense en una empresa de marketing en París.", "https://flxt.tmsimg.com/assets/p20738800_b_h8_ad.jpg", "https://tv-fanatic-res.cloudinary.com/iu/s--TZps7AUM--/f_auto,q_auto/v1598973306/emily-in-paris-poster", "16+", 4)
const m5 = new Movie ("Friends", 4.5, "Tres hombres y tres mujeres jóvenes son mejores amigos y viven en el mismo conjunto de apartamentos. Ellos enfrentan la vida y el amor en la ciudad de Nueva York y se involucran en los asuntos personales de los demás, donde incluso a veces intercambian novios o novias, lo que algunas veces genera situaciones que las personas comunes quizás nunca experimentan, especialmente durante las rupturas.", "https://i.blogs.es/b6418d/friends-tiempo/1366_2000.jpeg", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/07/poster-friends.jpg?itok=fLzwNnjz","13+", 4)
const m6 = new Movie ("The Big Bang Theory", 5, "Leonard y Sheldon son dos cerebros privilegiados que pueden ser capaces de decirle a todo el mundo más de lo que quiere saber sobre la física cuántica, pero que no tienen ni la menor idea de cómo relacionarse socialmente, sobre todo cuando se trata de mujeres. Sin embargo, la llegada de una nueva vecina llamada Penny al edificio altera la vida sentimental de Leonard y las obsesiones de Sheldon.", "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2018/08/Big-Bang-Theory-1.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1", "https://www.formulatv.com/images/series/posters/100/185/dest_1.jpg","13+", 5)
const m7 = new Movie ("Steven Universe Future", 3.5, "Tras salvar al mundo, Steven debe seguir ocupándose de los problemas ajenos. Sin embargo, pronto descubre que tendrá que ocuparse de los suyos.", "https://upload.wikimedia.org/wikipedia/en/d/de/Steven_Universe_Future_-_Title_Card.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVLykFaDZYplTiZx2aFr6HEMF6jjPRTI1HGA&usqp=CAU","7+", 3)
const m8 = new Movie ("A todos los chicos de los que me enamoré", 3.2, "Lara Jean escribe cartas secretas y reveladoras a sus cinco enamorados, pero nunca tuvo la intención de enviarlas.", "https://i.blogs.es/355954/cartel-chicos-enamore/1366_2000.jpg" ,"https://es.web.img3.acsta.net/pictures/18/07/27/13/53/2854483.jpg", "13+", 3)
const listaPeliculas = [m1,m2,m3,m4,m5,m6,m7,m8]

for (let i = 0; i < listaPeliculas.length; i++) {
    var movie = listaPeliculas[i]
    contenedor_recommended.innerHTML += movie.toHTML_recommended(i)
    contenedor_trending.innerHTML += movie.toHTML_trending(i)
}

function selectedMovie(id) {
    var movie = listaPeliculas[id]
    movie.toBanner()
}