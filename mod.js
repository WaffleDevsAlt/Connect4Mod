const newElem={label1:$("<label for'dotcolor1' style='margin-right: 5px;'>DotColor 1:</label>"),input1:$("<input style='width: 80%;' name='dotcolor1'id='dotcolor1' type='text'></input><br>"),label2:$("<label for'dotcolor2' style='margin-right: 5px;'>DotColor 2:</label>"),input2:$("<input style='width: 80%;' name='dotcolor2'id='dotcolor2' type='text'></input><br>"),label3:$("<label for'dotcolorwin1' style='margin-right: 5px;'>DotColorWin 1:</label>"),input3:$("<input style='width: 80%;' name='dotcolorwin1'id='dotcolorwin1' type='text'></input><br>"),label4:$("<label for'dotcolorwin2' style='margin-right: 5px;'>DotColorWin 2:</label>"),input4:$("<input style='width: 80%;' name='dotcolorwin2'id='dotcolorwin2' type='text'></input><br>"),label5:$("<label for'backcolorwin1' style='margin-right: 5px;'>BackColorWin 1:</label>"),input5:$("<input style='width: 80%;' name='backtcolorwin1'id='backcolorwin1' type='text'></input><br>"),label6:$("<label for'backcolorwin2' style='margin-right: 5px;'>BackColorWin 2:</label>"),input6:$("<input style='width: 80%;' name='backcolorwin2'id='backcolorwin2' type='text'></input><br>"),label7:$("<label for'dotcolormain' style='margin-right: 5px;'>DotColorMain:</label>"),input7:$("<input style='width: 80%;' name='dotcolormain'id='dotcolormain' type='text'></input><br>"),label8:$("<label for'backgroundcolor' style='margin-right: 5px;'>BackgroundColor:</label>"),input8:$("<input style='width: 80%;' name='backgroundcolor'id='backgroundcolor' type='text'></input><br>"),label9:$("<label for'boardcolor' style='margin-right: 5px;'>BoardColor:</label>"),input9:$("<input style='width: 80%;' name='boardcolor'id='boardcolor' type='text'></input><br>"),label10:$("<label for'colorname1' style='margin-right: 5px;'>ColorName 1:</label>"),input10:$("<input style='width: 80%;' name='colorname1'id='colorname1' type='text'></input><br>"),label11:$("<label for'colorname2' style='margin-right: 5px;'>ColorName 2:</label>"),input11:$("<input style='width: 80%;' name='colorname2'id='colorname2' type='text'></input><br>"),button1:$("<input type='submit' value='Update Values' id='submit'>")};var dotcolor1="red",dotcolor2="yellow",dotcolormain="black",dotcolorwin1="#400",dotcolorwin2="#770",backgroundcolor="black",boardcolor="black",colorname1="Red",colorname2="Yellow",backcolorwin1="#c00",backcolorwin2="#cc0";document.getElementById("result").id="resultMOD",document.getElementById("reset").id="resetMOD";for(var i=1;i<=42;i++)document.getElementById(i).id=i+"MOD",$("#"+i+"MOD").addClass("dotMOD"),$("#"+i+"MOD").removeClass("dot");for(var property in $("body").append($("<table id='modItems' style='text-align: left; top: 10%; color: white; left: 0%; position: absolute;'></table>")),newElem)$("#modItems").append(newElem[property]);function winLogic(){for(var o=0;o<winsets.length;o++){var l=board[winsets[o][0]-1],r=board[winsets[o][1]-1],t=board[winsets[o][2]-1],n=board[winsets[o][3]-1];"1"==l&&"1"==r&&"1"==t&&"1"==n?(playing=!1,$("#resultMOD").html(colorname1+" Won!"),$("#"+winsets[o][0]+"MOD").css("background-color",dotcolorwin1),$("#"+winsets[o][1]+"MOD").css("background-color",dotcolorwin1),$("#"+winsets[o][2]+"MOD").css("background-color",dotcolorwin1),$("#"+winsets[o][3]+"MOD").css("background-color",dotcolorwin1),winanim("1")):"2"==l&&"2"==r&&"2"==t&&"2"==n&&(playing=!1,$("#resultMOD").html(colorname2+" Won!"),$("#"+winsets[o][0]+"MOD").css("background-color",dotcolorwin2),$("#"+winsets[o][1]+"MOD").css("background-color",dotcolorwin2),$("#"+winsets[o][2]+"MOD").css("background-color",dotcolorwin2),$("#"+winsets[o][3]+"MOD").css("background-color",dotcolorwin2),winanim("2"))}}function winanim(o){1==o?$("html").css({transition:"background-color 1s ease-in-out","background-color":backcolorwin1}):2==o&&$("html").css({transition:"background-color 1s ease-in-out","background-color":backcolorwin2})}$("#submit").click(function(){console.log(),$("#dotcolor1").val()&&(dotcolor1=$("#dotcolor1").val()),$("#dotcolor2").val()&&(dotcolor2=$("#dotcolor2").val()),$("#dotcolormain").val()&&(dotcolormain=$("#dotcolormain").val()),$("#dotcolorwin1").val()&&(dotcolorwin1=$("#dotcolorwin1").val()),$("#dotcolorwin2").val()&&(dotcolorwin2=$("#dotcolorwin2").val()),$("#backgroundcolor").val()&&(backgroundcolor=$("#backgroundcolor").val()),$("#boardcolor").val()&&(boardcolor=$("#boardcolor").val()),$("#colorname1").val()&&(colorname1=$("#colorname1").val()),$("#colorname2").val()&&(colorname2=$("#colorname2").val()),$("#backcolorwin1").val()&&(backcolorwin1=$("#backcolorwin1").val()),$("#backcolorwin2").val()&&(backcolorwin2=$("#backcolorwin2").val()),$("body").css("background-color",boardcolor),$("html").css("background-color",backgroundcolor),$(":root").attr("style","--win_anim_color1: "+backgroundcolor)}),$("#resetMOD").css({position:"absolute",left:"calc(100vw/2 - 42px)",top:"min(calc(60vw + 155px), 755px)","background-color":"#000",border:"2px solid #fff",color:"white",padding:"10px 20px","text-align":"center","text-decoration":"none",display:"inline-block","font-size":"15px",cursor:"pointer"}),$("#resultMOD").css({color:"white","font-family":"Times, serif",padding:"0",position:"absolute",left:"calc(50vw - 35px)",top:"20px",width:"120p","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"}),$("body").on("click",".dotMOD",function(){if(this.id.includes("MOD")){var o=this.id.replace("MOD","");playing&&"0"==board[o-1]&&("0"==board[Number(o)+34]?o=Number(o)+35:"0"==board[Number(o)+27]?o=Number(o)+28:"0"==board[Number(o)+20]?o=Number(o)+21:"0"==board[Number(o)+13]?o=Number(o)+14:"0"==board[Number(o)+6]&&(o=Number(o)+7),board[o-1]=turn,1==turn?($("#"+o+"MOD").css("background-color",dotcolor1),turn=2,$("#resultMOD").html(colorname2+"'s Turn")):(turn=1,$("#resultMOD").html(colorname1+"'s Turn"),$("#"+o+"MOD").css("background-color",dotcolor2)),winLogic())}}),$("body").on("click","#resetMOD",function(){$("html").removeClass("won"),$("html").css("background-color",backgroundcolor),$(".dotMOD").css("background-color",dotcolormain),turn=1,playing=!0,$("#resultMOD").html(colorname1+"'s Turn"),board=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
