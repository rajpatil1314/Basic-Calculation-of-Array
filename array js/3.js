function findsort(value)
{
    return value.sort((a,b)=>a.age-b.age)

}
let employee =[
    {
        name: "John",
        age: 30
    },

    {
        name:"alex",
        age:25
    },
    {
        name: "james",
        age: 35
    },
    {
        name: "johnny",
        age: 20
    }
]
console.log(findsort(employee));