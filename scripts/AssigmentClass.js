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
const lesson9 = new Assigment("Lesson 09","","Link")
lessonList.push(lesson9)
const lesson10 = new Assigment("Lesson 10","","Link")
lessonList.push(lesson10)
const lesson11 = new Assigment("Lesson 11","","Link")
lessonList.push(lesson11)
const lesson12 = new Assigment("Lesson 12","","Link")
lessonList.push(lesson12)

const assigmentsList = document.getElementById("assigmentsList");

assigmentsList.innerHTML = lessonList.map(element => 
    `<li>${element.title}: <a href="${element.link}" target="_blank" rel="noopener">${element.linkName}</a></li>`
).join("");
