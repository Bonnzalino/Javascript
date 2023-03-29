Object

- 1.) จงเขียน function sum(obj) ที่มี key เป็นชื่อ employee และ value เป็นเงินเดือน โดยให้ function return ค่า เป็นผลรวมของเงินเดือนของ employee ทั้งหมด  //
    - Expected Output
        
        ```
        function sum(obj) {
        	---- code -----
        }
        
        input : { a: 50 , b: 100 , c: 250 }
        output : 400
        ```
        
    - Solution
        
        ```jsx
        const sum = obj => {
          let result = 0;
          for (let key in obj) {
            result += obj[key];
          }
          return result;
        }
        ```
        
- 2.) เขียน function รับ obj employees ให้หาผลรวมของเงินเดือน salary แล้ว return ค่าเป็นผลรวมของเงินเดือนของ employee ทั้งหมด
    - Expected Output
        
        ```jsx
        const employees = {
          Namwann: { salary: 1000, address: { district: 'Lad-Prao', province: 'Bangkok' } },
          Queen: { salary: 1500, address: { district: 'Hua-Hin', province: 'Prajuabkirakan' } },
          Anya: { salary: 800, address: { district: 'Maerim', province: 'Chiangmai' } },
          You: { salary: 2200, address: { district: 'Sriracha', province: 'Chonburi' } }
        };
        
        // output = 5500
        ```
        
    - Solution
        
        ```jsx
        const employees = {
          Namwann: { salary: 1000, address: { district: 'Lad-Prao', province: 'Bangkok' } },
          Queen: { salary: 1500, address: { district: 'Hua-Hin', province: 'Prajuabkirakan' } },
          Anya: { salary: 800, address: { district: 'Maerim', province: 'Chiangmai' } },
          You: { salary: 2200, address: { district: 'Sriracha', province: 'Chonburi' } }
        };
        
        const sumSalary = obj => {
          let result = 0;
          
          for (let key in employees) {
            result += employees[key].salary
          }
          
          return result;
        }
        
        sumSalary(employees)
        ```
        
    

Number

- 3.) เขียน function dice() ให้ return ค่าออกมาเป็นคะแนนของลูกเต๋า 1-6
    - Expected Output
        
        ```
        dice() // output 1-6
        ```
        
    - Hints
        
        `Math.random` `Math.floor`
        
    - Solution
        
        ```jsx
        const dice = () => 1 + Math.floor(Math.random()*6);
        ```
        
    

Array

- 4.) เขียน function ให้ return array ยกกำลังสอง //
    - Expected Output
        
        ```
        const arr = [2, 3, 4, 8, 12];
        powArr(arr); // [4, 9, 16, 64, 144]
        ```
        
    - Solution
        
        ```jsx
        // method 1
        const powArr = arr => arr.map(e => e**2)
        
        // method 2
        const powArr = arr => arr.map(e => Math.pow(e, 2))
        ```
        
- 5.) หา index ที่ id = 3 //
    - expected output
        
        ```jsx
        const tasks = [
          { id: 1, name: 'Fishing' },
          { id: 2, name: 'Shopping' },
          { id: 3, name: 'Swimming' },
          { id: 4, name: 'Football' }
        ];
        
        // return 2
        ```
        
    - solution
        
        ```jsx
        tasks.findIndex(e => e.id === 3)
        ```
        
- 6.) ให้เติมคำว่า kendo,judo,basketball ต่อท้าย swimming ใน array //
    - expected output
        
        ```jsx
        // ['boxing', 'football', 'swimming', 'biking'];
        
        // result = [ 'boxing', 'football', 'swimming', 'kendo', 'judo', 'basketball', 'biking' ]
        ```
        
    - solution
        
        ```jsx
        const sports = ['boxing', 'football', 'swimming', 'biking'];
        sports.splice(3,0,"kendo","judo","basketball")
        
        console.log(sports)
        ```
        
- 7.) return array ที่อายุไม่น้อยกว่า 20 //
    - expected output
        
        ```jsx
        const array = [
          { name: 'Benji', age: 30 },
          { name: 'Nas', age: 20 },
          { name: 'Sayo', age: 22 },
          { name: 'Sapari', age: 16 },
          { name: 'Storm', age: 27 }
        ];
        
        // [ { name: 'Benji', age: 30 },{ name: 'Sayo', age: 22 },{ name: 'Storm', age: 27 } ]
        ```
        
    - solution
        
        ```jsx
        array.filter(e => e.age > 20)
        ```
        
- 8.) เขียน function หาผลรวมของเลขทุกตัวยกกำลังสองใน array //
    - expected output
        
        ```jsx
        input [2,4,3]
        output 29
        ```
        
    - solution
        
        ```jsx
        const sqrtSum = arr => arr.reduce((acc, cur) => acc + Math.pow(cur,2),0)
        ```
        
- 9.) เขียน function deleteTodo(n) ให้ n เท่ากับ id ที่จะลบใน array //
    - expected output
        
        ```jsx
        const todos = [
          { id: 1, title: 'reading' , completed: false},
          { id: 2, title: 'workout' , completed: true},
          { id: 3, title: 'cooking' , completed: true},
          { id: 4, title: 'coding' , completed: false},
        ]
        
        // output
        deleteTodo(2)
        [
          { id: 1, title: 'reading' , completed: false},
          { id: 3, title: 'cooking' , completed: true},
          { id: 4, title: 'coding' , completed: false},
        ]
        ```
        
    - solution
        
        ```jsx
        const deleteTodo = (n) => {
          let idx = todos.findIndex(e => e.id === n)
          todos.splice(idx,1)
        }
        
        // -------------------------------------------
        function deleteTodo(n) {
          let temp = [...todos]
          temp = temp.filter(todo => todo.id !== n);
          return temp;
        }
        deleteTodo(2)
        
        //-------------------------------------------
        const deleteTodo = (arr, id) => {
            let index = arr.findIndex(e => e.id === id)
            const a = arr.splice(index,1)
            return arr;
        }
        console.log(deleteTodo(todos,2))
        ```
        

Exclusive

- 10.) เขียน function รับ obj ให้ log ค่าออกมาเป็น array ของ key และ value
    - Expected Output
        
        ```jsx
        const jsdLearners = { 
        	boom: { id: 53, age: 26, isSingle: "มีแมวแล้ว" },
        	bright: { id: 22, age: 25, isSingle: true },
        	tee: { id: 25, age: 26, isSingle: "ไม่บอกครับ" },
        	josave: { id: 16, age: 29, isSingle: false }
        }
        
        // output
        // 53_boom is 26 years old, status is "มีแมวแล้ว"
        // 22_bright is 22 years old, status is "โสดจ่ะ"
        // 25_tee is 26 years old, status is "ไม่บอกครับ"
        // 16_josave is 29 years old, status is "ไม่โสดจ่ะ"
        ```
        
    - Solution
        
        ```jsx
        const jsdLearners = { 
        	boom: { id: 53, age: 26, isSingle: "มีแมวแล้ว" },
        	bright: { id: 22, age: 25, isSingle: true },
        	tee: { id: 25, age: 26, isSingle: "ไม่บอกครับ" },
        	josave: { id: 16, age: 29, isSingle: true }
        }
        
        const jsdData = obj => {
          const checkSingle = (status) => status === true ? "โสดจ่ะ"   : status === false ? "ไม่โสดจ่ะ" : status 
          
          for (let [key, value] of Object.entries(obj)) {
            console.log(`${value.id}_${key} is ${value.age} years     old, status is ${checkSingle(value.isSingle)}`)
          }
        }
        
        jsdData(jsdLearners)
        ```
        
- 11.) เขียน function หาผลรวมใน array ที่เท่ากับ target ให้ return index ของ array นั้น