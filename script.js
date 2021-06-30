var assesment_count = 4;
var G_count = 12;

function get_score(index){
    var score_id = "score" + index;
    var e = document.getElementById(score_id);
    return e.value;
}

function get_percentage(index){
    var percentage_id = "percentage" + index;
    var e = document.getElementById(percentage_id);
    return e.value;
}

function calc_total_score(){
    var t_score = 0;
    for(var i = 0; i< assesment_count; i++){
        t_score += +((get_score(i)/100)*get_percentage(i));
    }
    return t_score;
}

function display_score(display_id1,display_id2){
    var code = error_check();
    
    switch(code){
        case 0: document.getElementById(display_id1).innerHTML = "<h1>" + calc_total_score().toFixed(2) + "</h1>"; document.getElementById(display_id2).innerHTML = "<h2>" + get_grade() + "</h2>";
            break;
        case 1: document.getElementById(display_id1).innerHTML = "<h1>Percentage Range Error</h1>";
            break;
        case 2: document.getElementById(display_id1).innerHTML = "<h1>Score Range Error</h1>";
            break;
        case 3: document.getElementById(display_id1).innerHTML = "<h1>Total Percentage Error</h1>";
            break;
        case 4: document.getElementById(display_id1).innerHTML = "<h1>" + calc_total_score().toFixed(2) + "</h1>"; document.getElementById(display_id2).innerHTML = "Grade Order Error";
            break;
    }
    
}

function get_input_row(index){
    var a_row = "<tr><td><input type='number' id='percentage" + index +"' placeholder='percentage'></td><td><input type='number' id='score" + index + "' placeholder='score'></td></tr>";
    return a_row;
}

function get_input_body(){
    var input_body = "";
    for(var i=0;i<assesment_count;i++){
        input_body += get_input_row(i);
    }
    return input_body;
}

function display_input_body(display_id){
    document.getElementById(display_id).innerHTML = get_input_body();
}

function increase_assesment_count(display_id){
    if(assesment_count < 10){
        assesment_count++;
        display_input_body(display_id);
    }
    else{alert("Cannot have more than 10 assesment items");}
}

function decrease_assesment_count(display_id){
    if(assesment_count > 2){
        assesment_count--;
        display_input_body(display_id);
    }
    else{alert("Cannot have less than 2 assesment items");}
}

function check_total_percentage(){
    var total = 0;
    for(var i=0; i<assesment_count;i++){
        total += +(get_percentage(i))
    }
    if(total == 100){
        return true;
    }
    else{return false;}
}

function check_score_range(){
    var range = true;
    for(var i=0; i<assesment_count; i++){
        if(get_score(i) <= 100 && get_score(i) >= 0){}
        else{range = false}
    }
    return range;
}

function check_percentage_range(){
    var range = true;
    for(var i=0; i<assesment_count; i++){
        if(get_percentage(i) <= 100 && get_percentage(i) >= 0){}
        else{range = false}
    }
    return range;
}

function error_check(){
    if(check_percentage_range() == false){
        return 1;
    }
    else if(check_score_range() == false){
        return 2;
    }
    else if(check_total_percentage() == false){
        return 3;
    }
    else if(check_grade_order() == false){
        return 4;
    }
    else{
        return 0;
    }
}

function get_G(index){
    var G_id = "G" + index;
    var e = document.getElementById(G_id);
    return e.value;
}

function get_grade(){
    var score = calc_total_score();
    var grade_found = false;

    var i = 0;
    while(i<G_count && grade_found == false){
        if(score >= get_G(i)){//G gets ignored at G5 and G9
            if(i == 0){
                var grade = "A";
            }
            else if(i == 1){
                var grade = "A-";
            }
            else if(i == 2){
                var grade = "B+";
            }
            else if(i == 3){
                var grade = "B";
            }
            else if(i == 4){
                var grade = "B-";
            }
            else if(i == 5){
                var grade = "C+";
            }
            else if(i == 6){
                var grade = "C";
            }
            else if(i == 7){
                var grade = "C-";
            }
            else if(i == 8){
                var grade = "D+";
            }
            else if(i == 9){
                var grade = "D";
            }
            else if(i == 10){
                var grade = "D-";
            }
            else if(i == 11){
                var grade = "F";
            }
            
            grade_found = true;
        }
        i++;
    }
    return grade;
}

function check_grade_order(){
    var counter = G_count - 1;
    var order = true;
    for(var i=0;i<counter;i++){
        if(get_G(i) > get_G(i+1));
        else{order = false}
    }
    return order;
}