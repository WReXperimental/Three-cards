import "./style.css"
import _ from "lodash";
import data from "./data/db.json";
{
  console.log("sdjio");

  // 第一个是初始条件
  //第二个是构成循环的条件
  //第三个是循环如何改变的
  for (let num = 0; num < 10; num++) {}

  for (let i = 0; i <= 100; i = i + 2) {
    console.log(i);
  }

  let str = "Raymond";
  let len = str.length;

  for (let i = 0; i <= 7; i++) {
    console.log(str[i]);
  }

  const array = ["name", "age", "income"];

  console.log(array[1][1], "----test----");
  //在array后面加几个[]并填index就是去到第几层

  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array[i].length - 1; j++) {
      let array2 = array[i];
      console.log(array2[j]);
      //这种比较复杂

      console.log(array[i][j]);
      //这个简单
    }
  }

  array.forEach(function (element) {
    console.log(element);

    // element.forEach((element2)=>{
    //   console.log(element2);
    // })
    //forEach function 只能对array有用，对string不可以用foreach
  });

  array.forEach((element) => {
    console.log(element);
  });

  for (let i = 0; i < array.length; i++) {
    if (i === 1) {
      break;
      // continue
      //可以用break跳出循环
    }
    console.log(array[i]);
  }

  //   array.forEach((element) => {
  //     if(element==='age'){
  //       break
  //     }
  //     console.log(element);
  //   });
  //forEach不能break，会报错。因为forEach没有break的功能
}

{
  const app = document.getElementById("app");
  //用document.getElementById来拿html文件里的element，拿的时候id一定要打引号
  app.textContent = "hello world";
  //用.textcontent改变里面的值
}

{
  const app = document.getElementById("app");
  const array = ["name", "age", "income"];
  const h2 = document.createElement("h2");
  // 用document.createElement来创造元素
  h2.textContent = array[0];
  //用.textcontent改变里面的值
  app.append(h2);
  // 用.append来放到页面上

  for (let i = 0; i < array.length; i++) {
    const newH2 = document.createElement("h2");
    // 如果内部和外部都有同样的变量名，会选择近的这个，这叫就近原则
    newH2.textContent = array[i];
    app.append(newH2);
  }

  array.forEach((element) => {
    const newH2 = document.createElement("h2");
    newH2.textContent = element;
    app.append(newH2);
  });

  console.log(data);
}

{
  console.clear();

  const app = document.getElementById("app");
  app.textContent = "";
  //用这个方法来清空页面

  // app.innerHTML=''
  // 这个也可以清空页面，但是不推荐，因为有安全隐患
}

{
  console.log(data.users);

  const users = data.users;
  // 之前使用了import data from "./data/db.json"; 来读取db.json的数据

  const app = document.getElementById("app");
  users.forEach((element) => {
    console.log(element);

    const nameIcon=document.createElement("i")
    nameIcon.className="fa-solid fa-user"

  

    const nameTitleDom = document.createElement("h2");
    nameTitleDom.textContent = "Name:";
    // 创建nametitle
    const nameDom = document.createElement("span");
    nameDom.textContent = element.name;
    // 把db.jason里的名字拿过来

    const ageTitleDom = document.createElement("h3");
    ageTitleDom.textContent = "Age:";
    const ageDom = document.createElement("span");
    ageDom.textContent = element.age;

    const idTitleDom = document.createElement("h4");
    idTitleDom.textContent = "ID:";
    const idDom = document.createElement("span");
    idDom.textContent = element.ID;

    const profileDom = document.createElement("div");
    profileDom.classList.add('card')
    // 对每个名字创建div

   profileDom.append(nameIcon);

    profileDom.append(nameTitleDom);
    profileDom.append(nameDom);

    profileDom.append(ageTitleDom);
    profileDom.append(ageDom);

    profileDom.append(idTitleDom);
    profileDom.append(idDom);

    app.append(profileDom);
  });
}
