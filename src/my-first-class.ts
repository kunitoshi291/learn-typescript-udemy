export {};
class Person {
    name: string;
    age: number;
     //インスタンス化するとこのconstructor()が実行されてthis.nameにTaroが入る。
     // コンストラクタは、クラスをnewしたときに実行される関数で、インスタンスプロパティの初期化する処理を実装する場所
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`
    }
}


let taro = new Person('Taro', 31);
console.log(taro.profile());

