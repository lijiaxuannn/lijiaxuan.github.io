import '../css/Ani.css'
//第1题
// export class Animate{
//     constructor(props){
//         this.el=props.el
//         this.model=props.model
//     }
//     add(){
//         this.model.exec(this.el)
//     }
// }
// export class Translate{
//     constructor(){}
//     exec(el){
//         el.classList.add('left')
//     }
// }

//第2题
// export class Animate{
//     constructor(props){
//         this.el=props.el
//         this.type=props.type
//     }
//     load(){
//         if(this.type=='translate'){
//             this.model=new Translate()
//             this.model.exec(this.el)
//         }
//     }
// }
// export class Translate{
//     constructor(){}
//     exec(el){
//         el.classList.add('left')
//     }
// }

//第5题
// export class Animate {
//     constructor(props){
//         this.el=Animate.el
//     }
//     static create(){
//         return new Animate();
//     }
//     static el
//     use(Translate){
//         try{
//             this.model=Translate.install;
//         }catch(e){
//             Translate();
//         }
//         return this
//     }
//     mount(el){
//         Animate.el=el
//         this.model().exec(this.el)
//     }
// }

// export class Translate extends Animate{
//     constructor(){
//         super()
//     }
//     exec(){
//         this.el.classList.add('left')
//     }
//     static install(){
//         return new Translate();
//     }
// }