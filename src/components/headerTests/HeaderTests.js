//HeaderTests.js------------------

import React from 'react';

import {HeaderTestsList} from "../headerTestsList/HeaderTestsList.js";

import  "./HeaderTests.css";

import { useSelector, useDispatch } from 'react-redux';


let list_tests_wrapper = false;

let headerTestsList = null;

let selected_answer = -1;  // number of the selected answer in the current question

let correct_answer = -1;  // number of the correct answer in the current question  

let current_question = 0;  // number of current question ( 0  -  first)

//let currentTest = 0; // current test

export function HeaderTests() {

console.log('HeaderTests-----');  

    const count_questions_test = useSelector((store) => store.count_questions_test);

    let count_correct_answer = Array(count_questions_test).fill(0);  // count of correct answers for every question
        
    let count_time_question = Array(count_questions_test).fill('00:00');  // all time for the current question

    let count_time_test = Array(count_questions_test).fill('00:00'); // all time for the current test

    let dispatch = useDispatch();

    let menuTest = 
        <div id="header_menu_tests" class="header_menu_item"
                                onMouseEnter={mouseEnter} >
            Tests
        </div>


function mouseEnter() {  // mouse cursor is over id=header_menu_tests 
    console.log('HeaderTests: mouseEnter ---------');

    dispatch({type: 'HeaderTests_mouseEnter', 
              payload: {
                count_time_question:    count_time_question, 
                count_time_test:        count_time_test,
                list_tests_wrapper:     true, 
                selected_answer:        selected_answer, 
                correct_answer:         correct_answer, 
                current_question:       current_question, 
                count_correct_answer:   count_correct_answer, 
              }
    });

}//end of mouseEnter---------------------

function mouseEnterList() {  // mouse cursor is over id=header_menu_tests 
    
    console.log('HeaderTests: mouseEnterList--------------')

dispatch({  type: 'HeaderTests_mouseEnterList', 
            payload: {
                count_time_question:    count_time_question, 
                count_time_test:        count_time_test,
                list_tests_wrapper:     true, 
                selected_answer:        selected_answer, 
                correct_answer:         correct_answer, 
                current_question:       current_question,
                count_correct_answer:   count_correct_answer, 
            }
});

}//end of mouseEnterList--------------------


function mouseLeaveList() {
    console.log('HeaderTests: mouseLeaveList-------')
    dispatch({  type: 'HeaderTests_mouseLeaveList', 
                payload: {
                    list_tests_wrapper: false
                }
    });
}// end of mouseLeaveList

/*
    menuTest.mouseenter =  (event) => {
        visibleListTest = "visibility: visible";
    };

    menuTest.mouseleave =  (event) => visibleListTest = "visibility: hidden";
*/
//let showHideTestWork2 = useSelector((store) => store.showHideTest); 
list_tests_wrapper = useSelector((store) => store.list_tests_wrapper); 

if(list_tests_wrapper)  headerTestsList =  
    <div id="list_tests_wrapper">
        <HeaderTestsList />
    </div>
else   
<div id="list_tests_wrapper" >
</div>

console.log('HeaderTests: list_tests_wrapper=', list_tests_wrapper);
console.log('HeaderTests: headerTestsList=', headerTestsList);
//console.log('HeaderTests mouseEnter showHideTestWork2 3 =',showHideTestWork2);  
//showHideTestWork3 = useSelector((store) => store.list_tests_wrapper);




    return  (
        <div id="header_menu_tests_cont_id" onMouseEnter={mouseEnterList} 
                                            onMouseLeave={mouseLeaveList}>
            {menuTest}
            {headerTestsList}
        </div>
    )
}//end of HeaderTests
