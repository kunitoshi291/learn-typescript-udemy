export{};

let bmi: ( height: number, weight: number , printable?: boolean ) => number = (
    height:number,
    weight:number, 
    printable?: boolean
    ): number =>  {
        const bmi = weight / (height * height);
        if (printable) {
            console.log({ bmi });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        }
        return bmi;
    };

    bmi(1.65, 58, true);
    
    // bmi(身長、体重、console.logで出力するかどうか？) 
    // bmi(1.65, 58, true);
    // bmi(1.65, 58, false);
    // bmi(1.65, 58);





    
