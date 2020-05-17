let main=document.querySelector('#main')

let str=`<h1>vue-cli</h1>
<section>
  <h2>关于MVVM</h2>
  <img src="./images/2.png" alt="#">
</section>
<section>
  <h2>单文件组件的渲染</h2>
  <img src="./images/01-单文件组件的渲染.png" alt="#">
</section>
<section>
  <h2>vue-cli创建一个vue项目</h2>
  <img src="./images/1.png" alt="#">
  <img src="./images/02-mydemo1.png" alt="#">
  <img src="./images/03-mydemo2.png" alt="#">
  <img src="./images/04-mydemo3.png" alt="#">
  <img src="./images/05-mydemo4.png" alt="#">
  <img src="./images/06-mydemo5.png" alt="#">
  <img src="./images/07-mydemo6.png" alt="#">
  <img src="./images/08-mydemo7.png" alt="#">
</section>
<section>
  <h2>单文件组件的结构</h2>
  <img src="./images/10-单文件组件的基本结构.png" alt="#">
</section>
<section>
  <h2>父子组件的通信</h2>
  <img src="./images/12-子传父.png" alt="#">
</section>`

let n=1

main.innerHTML=str.substring(0,n)

setInterval(()=>{
  if(n>str.length){
    return
  }
  n+=1 
  main.innerHTML=str.substring(0,n)
},10)




