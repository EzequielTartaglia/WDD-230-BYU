const lessonList = []

class Assigment{
    constructor(title,link,linkName){
        this.title = title,
        this.link = link,
        this.linkName = linkName
    }
}
const lesson2 = new Assigment("Lesson 02","","Link")
lessonList.push(lesson2)
const lesson3 = new Assigment("Lesson 03","","Link")
lessonList.push(lesson3)
const lesson4 = new Assigment("Lesson 04","","Link")
lessonList.push(lesson4)
const lesson5 = new Assigment("Lesson 05","","Link")
lessonList.push(lesson5)
const lesson6 = new Assigment("Lesson 06","","Link")
lessonList.push(lesson6)
const lesson7 = new Assigment("Lesson 07","","Link")
lessonList.push(lesson7)
const lesson8 = new Assigment("Lesson 08","","Link")
lessonList.push(lesson8)
const lesson9 = new Assigment("Lesson 09","","Link")
lessonList.push(lesson9)
const lesson10 = new Assigment("Lesson 10","","Link")
lessonList.push(lesson10)
const lesson11 = new Assigment("Lesson 11","","Link")
lessonList.push(lesson11)

const assigmentsList = document.getElementById("assigmentsList");

assigmentsList.innerHTML = lessonList.map(element => 
    `<li>${element.title}: <a href="${element.link}" target="_blank" rel="noopener">${element.linkName}</a></li>`
).join("");
