//problem 1 solution
function test(str) {

    const romanvalue = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    let total = 0
  
    for (let i = 0; i < str.length; i++) {
      total += romanvalue[str[i]]
    }
    return total
  
  }
  console.log(test("LVIII"))
  console.log(test("III"))
  
  //problem 2 solution
  function employeeBonus() {
    const employee = [
      {
        empId: 3,
        name: 'Brad',
        supervisor: null,
        salary: 4000,
  
      },
      {
        empId: 1,
        name: 'John',
        supervisor: 3,
        salary: 1000,
  
      },
      {
        empId: 2,
        name: 'Dan',
        supervisor: 3,
        salary: 2000,
  
      },
      {
        empId: 4,
        name: 'Thomas',
        supervisor: 3,
        salary: 4000,
  
      }
    ]
  
    const bonus = [
      {
        empId: 2,
        bonus: 500
      },
      {
        empId: 4,
        bonus: 2000
      }
    ]

    
  
  
    
  }