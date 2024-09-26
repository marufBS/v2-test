// I => V and X,
// 1 => 5 and 10

// X => L and C,
// 10=> 50and 100,

// C => D and M,
// 100 => 500 and 1000
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
      // console.log(total += romanvalue[str[i]])
    }
    return total
  
  }
  // console.log(test("LVIII"))
  console.log(test("III"))
  //50+5+1+1+1
  
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