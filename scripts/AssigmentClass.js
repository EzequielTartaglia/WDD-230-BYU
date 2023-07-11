const lessonList = []

class Assigment{
    constructor(title,link,linkName){
        this.title = title,
        this.link = link,
        this.linkName = linkName
    }
}
const lesson2 = new Assigment("Lesson 02","./Lesson 2/design-principles.html","Design Principles Document")
lessonList.push(lesson2)
const lesson3 = new Assigment("Lesson 03","./Lesson 3","Chamber Exchange Site Plan")
lessonList.push(lesson3)
const lesson4 = new Assigment("Lesson 04","./Chamber","Chamber Home Page")
lessonList.push(lesson4)
const lesson5 = new Assigment("Lesson 05","./Lesson 5/bom.html","Book of Mormon - Top 25")
lessonList.push(lesson5)
const lesson7 = new Assigment("Lesson 07","./Lesson 7/lazyload.html","Progressive Loading of Images (Lazyload)")
lessonList.push(lesson7)
const lesson7b = new Assigment("Lesson 07","./Chamber/discover.html","Chamber Discover Page")
lessonList.push(lesson7b)
const lesson8 = new Assigment("Lesson 08","./Lesson 8/tablebuild.html","Table Build")
lessonList.push(lesson8)
const lesson8b = new Assigment("Lesson 08","./Chamber/join.html","Chamber Join Page | Chamber Thanks Page (form's response)")
lessonList.push(lesson8b)
const lesson9a = new Assigment("Lesson 09","./Lesson 9/prophets.html","Latter-day Prophets (API)")
lessonList.push(lesson9a)
const lesson9b = new Assigment("Lesson 09","./Chamber/directory.html","Chamber Directory Page")
lessonList.push(lesson9b)
const lesson10 = new Assigment("Lesson 10","./Lesson 10/weather-api.html","Weather API")
lessonList.push(lesson10)
const lesson11 = new Assigment("Lesson 11","./Chamber/contact.html","Chamber Contact Page | Chamber Contact Success Page (form's response)")
lessonList.push(lesson11)

/* const finalProjectDesign = new Assigment("Final project - Site Plan","./Bountiful Foods/Design/index.html","Bountiful Foods | Design planning")
lessonList.push(finalProjectDesign)
const finalProjectHome = new Assigment("Final project","./Bountiful Foods/index.html","Bountiful Foods | Home")
lessonList.push(finalProjectHome)
const finalProjectFresh = new Assigment("Final project","./Bountiful Foods/fresh.html","Bountiful Foods | Fresh")
lessonList.push(finalProjectFresh)
const finalProjectAbout = new Assigment("Final project","./Bountiful Foods/about.html","Bountiful Foods | About")
lessonList.push(finalProjectAbout) */

const assigmentsList = document.getElementById("assigmentsList");

assigmentsList.innerHTML = lessonList.map(element => 
    `<li>${element.title}: <a href="${element.link}" target="_blank" rel="noopener">${element.linkName}</a></li>`
).join("");
