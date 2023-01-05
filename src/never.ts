export {};
// never型→関数の呼び元に戻ってこない関数の戻り値に対応するアノテーション
function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('test');
    console.log(result);
    
}   catch(error) {
    console.log(error);
    
}
