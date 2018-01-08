$(document).ready(function(){
    $("#submitform").click(function(){
        var nickname = $("#nickname").val();
        var name = $("#name").val();
        var idnum = $("#idnum").val();
        var phonenum = $("#phonenum").val();
        var birthdate = $("#birthdate").val();
        var gender = $("[name='gender']").filter(":checked").attr("value"); 
        var height = $("#height").val();
        var weight = $("#weight").val();
        var ht_province = $("#s1").val();  
        var ht_city = $("#s2").val();
        var hj_province = $("#s3").val();  
        var hj_city = $("#s4").val();
        var education = $("[name='education']").filter(":checked").attr("value"); 
        var edu_province = $("#edu_province").val();
        var edu_city = $("#edu_city").val();
        var edu_school = $("#edu_school").val();
        //alert(edu_province + " " + edu_city + " " + edu_school);
        var email = $("#email").val();
        //alert(email);
        var house = $("[name='house']").filter(":checked").attr("value"); 
        //alert(house);
        var car = $("[name='car']").filter(":checked").attr("value"); 
        //alert(car);
        var job = $("#job").val();
        //alert(job);
        var salary_w = $("#salary_w").val();
        //alert(salary_w);
        var intreast = $("#intreast").val();
        //alert(intreast);
        var character = $("#character").val();

        var member = {
            "nickname":nickname,
            "name":name,
            "idnum":idnum,
            "phonenum":phonenum,
            "birthdate":birthdate,
            "gender":gender,
            "height":height,
            "weight":weight,
            "ht_province":ht_province,
            "ht_city":ht_city,
            "hj_province":hj_province,
            "hj_city":hj_city,
            "education":education,
            "edu_province":edu_province,
            "edu_city":edu_city,
            "edu_school":edu_school,
            "email":email,
            "house":house,
            "car":car,
            "job":job,
            "salary_w":salary_w,
            "intreast":intreast,
            "character":character
        };
        $.ajax({
                type:"post",
                url:"/signup",
                data:JSON.stringify(member),
                dataType: "json",
                contentType: "application/json"
                cache:false,
                success:function(data){
                    alert(data);
                },
                error:function(XMLHttpRequest, textStatus, errorThrown){
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                },
        });
    });
});

function validate_required(field, alerttxt)
{
    with (field)
    {
        if (value==null || value=="" || value=="请选择")
        {
            alert(alerttxt);
            return false;
        }
        else 
        {
            return true;
        }
    }
}

function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_required(nickname, "群昵称必填项！")==false)
        {
            nickname.focus();
            return false;
        }
        if (validate_required(name, "实名制交友，姓名是必填项！")==false)
        {
            name.focus();
            return false;
        }
        if (validate_required(birthdate, "实名制交友，出生年月是必填项！")==false)
        {
            birthdate.focus();
            return false;
        }
        if (validate_required(gender, "实名制交友，性别是必填项！")==false)
        {
            //$("input:radio[value='Male']").attr('checked','true');
            return false;
        }
        if (validate_required(height, "实名制交友，身高是必填项！")==false)
        {
            height.focus();
            return false;
        }
        if (validate_required(weight, "实名制交友，体重是必填项！")==false)
        {
            weight.focus();
            return false;
        }
        if (validate_required(s2, "实名制交友，老家是必填项！")==false)
        {
            s2.focus();
            return false;
        }
        if (validate_required(s4, "实名制交友，户籍所在地是必填项！")==false)
        {
            s4.focus();
            return false;
        }
        if (validate_required(education, "实名制交友，学历是必填项！")==false)
        {
            //education.focus();
            return false;
        }
        if (validate_required(edu_school, "实名制交友，毕业院校是必填项！")==false)
        {
            edu_school.focus();
            return false;
        }
        if (validate_required(house, "实名制交友，住房情况是必填项！")==false)
        {
            //house.focus();
            return false;
        }
        if (validate_required(job, "实名制交友，工作情况是必填项！")==false)
        {
            job.focus();
            return false;
        }
        if (validate_required(salary_w, "实名制交友，收入情况是必填项！")==false)
        {
            salary_w.focus();
            return false;
        }
        if (validate_required(intreast, "实名制交友，兴趣爱好是必填项！")==false)
        {
            intreast.focus();
            return false;
        }
        if (validate_required(character, "实名制交友，性格描述是必填项！")==false)
        {
            character.focus();
            return false;
        }
    }
}
