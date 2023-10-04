let studentName = document.querySelector("#studentName");
let studentEmail = document.querySelector("#studentEmail");
let MobileNo = document.querySelector("#MobileNo");
let studentAddress = document.querySelector("#student");
let Gender = document.querySelectorAll(".gender-input");
let check = document.querySelectorAll(".scope-input");
let btn = document.querySelector(".btn");
let studentList = [];
btn.addEventListener("click", function () {
    let Gender_record;
    let all_Check =[];
    Gender.forEach((el) => {
        if (el.checked){
            Gender_record = el.value;
        }
    });
    check.forEach((ch)=>{
        if (ch.checked){
            all_Check.push(ch.value);
        }
    });
    let StudentForm ={
        student_Name: studentName.value,
        Student_EMail: studentEmail.value,
        Mobile_no: MobileNo.value,
        Student_Address: studentAddress.value,
        scope: all_Check,
        _Gender: Gender_record,
       };
    studentList.push(StudentForm);
    let  student_List =  studentList
    .map(function (value, index) {
        return `<tr>
                <td>${value.student_Name}</td>
                <td>${value. Student_EMail}</td>
                <td>${value.Mobile_no}</td>
                <td>${value.Student_Address}</td>
                <td>${value._Gender}</td>
                <td>${value.scope}</td>
                <td><button class="btn1">Edit</button>  <button class="btn2">Delete</button></tr>`;
    })
    .join("");
    tbody.innerHTML =  student_List;
});