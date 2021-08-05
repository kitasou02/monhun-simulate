let displayPressed = false;


document.addEventListener('DOMContentLoaded',(event)=>{
    console.log('読み込み')
    document.getElementById('calculate')
    .addEventListener('click',() => {
        console.log('計算がクリックされた');

    });
    
    })

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('save')
    .addEventListener('click',() => {
        console.log('保存がクリックされた');
        //攻撃力％
        const power=Number(document.getElementById('power').value)/100;
        console.log(power)
        
        //攻撃スキル
        console.log(document.getElementById('attack').value)
        switch (document.getElementById('attack').value){
            case "0":
                console.log('攻撃スキルは0');
                attack_up = 0;
                power_up = 1;
                break;
            case "1":
                console.log('攻撃スキルは1');
                attack_up = 3;
                power_up = 1;
                break;
            case "2":
                console.log('攻撃スキルは2');
                attack_up = 6;
                power_up = 1;
                break;
            case "3":
                console.log('攻撃スキルは3');
                attack_up = 9;
                power_up = 1;
                break;
            case "4":
                console.log('攻撃スキルは4');
                attack_up = 7; //加算
                power_up = 1.05; //乗算1
                break;
            case "5":
                console.log('攻撃スキルは5');
                attack_up = 8;
                power_up = 1.06;
                break;
            case "6":
                console.log('攻撃スキルは6');
                attack_up = 9;
                power_up = 1.08;
                break;
            case "7":
                console.log('攻撃スキルは7');
                attack_up = 10;
                power_up = 1.1;
                break;
        }

        //会心UP
        console.log(document.getElementById('critical_up').value)
        switch (document.getElementById('critical_up').value){
            case "0":
                console.log('会心スキル0');
                critical_up = 0;
                break;
            case "1":
                console.log('会心スキル1');
                critical_up = 5;
                break;
            case "2":
                console.log('会心スキル2');
                critical_up = 10;
                break;
            case "3":
                console.log('会心スキル3');
                critical_up = 15;
                break;
            case "4":
                console.log('会心スキル4');
                critical_up = 20;
                break;
            case "5":
                console.log('会心スキル5');
                critical_up = 25;
                break;
            case "6":
                console.log('会心スキル6');
                critical_up = 30;
                break;
            case "7":
                console.log('会心スキル7');
                critical_up = 40;
                break;      
        }
        
        //弱点特攻 =>critical
        console.log(document.getElementById('critical').value)
        switch (document.getElementById('critical').value){
            case "0":
                console.log('弱点特攻は0');
                critical = 0;
                break;
            case "1":
                console.log('弱点特攻は1');
                critical = 15;
                break;
            case "2":
                console.log('弱点特攻は2');
                critical = 30;
                break;
            case "3":
                console.log('弱点特攻は3');
                critical = 50;
                break;
        }

        //超会心 critical_h => 会心補正
        console.log(document.getElementById('critical_sp').value)
        switch (document.getElementById('critical_sp').value){
            case "0":
                console.log('超会心は0');
                critical_h = 1.25;
                break;
            case "1":
                console.log('超会心は1');
                critical_h = 1.3;
                break;
            case "2":
                console.log('超会心は2');
                critical_h = 1.35;
                break;
            case "3":
                console.log('超会心は3');
                critical_h = 1.4;
                break;
        }
        //会心補正の計算
        const critical_rate=Number(document.getElementById('critical_rate').value);
        const average_power=(100-(critical_rate+critical_up))*power/100+(critical_rate+critical_up)*power*critical_h/100; //(100-(critical_rate+critical_up))*((power*power_up)+attack)
        //const average_power_critical=(100-(critical_rate+critical_up))*power/100+(critical_rate+critical_up)*power*critical_h/100

        console.log('攻撃合計'+(power*power_up)+attack_up);
        console.log('会心率合計'+(critical_rate+critical_up));
        console.log(average_power);

        //属性
        console.log(document.getElementById('elemental').value);
        //切れ味
        console.log(document.getElementById('cut').value);


    });
    })

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('cut')
    .addEventListener('change',(event) => {
        console.log(event.target.value);
            
    });
    })
    
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('critical')
    .addEventListener('change',(event) => {
        console.log(event.target.value);
                    
    });
    })

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('critical_up')
    .addEventListener('change',(event) => {
    console.log(event.target.value);

    });
    })
    
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('critical_sp')
    .addEventListener('change',(event) => {
    console.log(event.target.value);
    
    });
    })
    
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('attack')
    .addEventListener('change',(event) => {
    console.log(event.target.value);
        
    });
    })

document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('critical_rate')
    .addEventListener('change',(event) => {
    console.log(event.target.value);
            
    });
    })
    
document.addEventListener('DOMContentLoaded',(event)=>{
    document.getElementById('power')
    .addEventListener('change',(event) => {
    console.log(event.target.value);
        
    });
    })
    
