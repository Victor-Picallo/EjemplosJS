const students = new Map()

students.set('David',2)
students.set('Ana',5)

for (let clave of students.keys()){
    console.log(clave)//2,5
}

for (let value of students.values()){
    console.log(value)//David,Ana
}

for (let [key, value] of students.entries()){
    console.log(key, values)//David 2, Ana 5
}