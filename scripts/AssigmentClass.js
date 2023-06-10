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
const lesson9 = new Assigment("Lesson 09","./Lesson 9/prophets.html","Latter-day Prophets (API)")
lessonList.push(lesson9)
const lesson10 = new Assigment("Lesson 10","","Link")
lessonList.push(lesson10)

const assigmentsList = document.getElementById("assigmentsList");

assigmentsList.innerHTML = lessonList.map(element => 
    `<li>${element.title}: <a href="${element.link}" target="_blank" rel="noopener">${element.linkName}</a></li>`
).join("");
