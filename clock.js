
    var clock = document.querySelector("#clock");
    if(clock.getContext){
      var ctx = clock.getContext("2d");
        setInterval(function(){
        ctx.clearRect(0,0,clock.width,clock.height);
        move();
      },1000);
      
      move();
      function move(){
        ctx.save();
        ctx.lineWidth = 8;
        ctx.strokeStyle = "black";
        ctx.lineCap = "round";
        ctx.translate(200,200);
        ctx.rotate(-90*Math.PI/180);
        ctx.beginPath();
        
        //外层空心圆盘
        ctx.save();
        ctx.strokeStyle="#325FA2";
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.arc(0,0,140,0,360*Math.PI/180);
        ctx.stroke();
        ctx.restore();
        
        
        //时针刻度
        ctx.save();
        for(var i=0;i<12;i++){
          ctx.rotate(30*Math.PI/180);
          ctx.beginPath();
          ctx.moveTo(100,0)
          ctx.lineTo(120,0);
          ctx.stroke();
        }
        ctx.restore();
        
        //分针刻度
        ctx.save();
        ctx.lineWidth=4;
        for(var i=0;i<60;i++){
          ctx.rotate(6*Math.PI/180);
          if((i+1)%5!=0){
            ctx.beginPath();
            ctx.moveTo(117,0)
            ctx.lineTo(120,0);
            ctx.stroke();
          }
        }
        ctx.restore();
        
        //时针 分针 秒针 表座
        var date = new Date();
        var s = date.getSeconds();
        var m = date.getMinutes()+s/60;
        var h = date.getHours()+m/60;
        h = h>12?h-12:h;
        
        //时针
        ctx.save()
        ctx.lineWidth=14;
        ctx.rotate(h*30*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(-20,0);
        ctx.lineTo(80,0);
        ctx.stroke();
        ctx.restore()
        
        //分针
        ctx.save()
        ctx.lineWidth=10;
        ctx.rotate(m*6*Math.PI/180)
        ctx.beginPath()
        ctx.moveTo(-28,0);
        ctx.lineTo(112,0);
        ctx.stroke();
        ctx.restore()
        
        
        //秒针
        ctx.save()
        ctx.lineWidth=6;
        ctx.strokeStyle="#D40000";
        ctx.fillStyle="#D40000";
        ctx.rotate(s*6*Math.PI/180)
        ctx.beginPath();
        ctx.moveTo(-30,0);
        ctx.lineTo(83,0);
        ctx.stroke();
          //表座
          ctx.beginPath();
          ctx.arc(0,0,10,0,360*Math.PI/180);
          ctx.fill();
          //秒头
          ctx.beginPath();
          ctx.arc(96,0,10,0,360*Math.PI/180);
          ctx.stroke();
        ctx.restore()
        ctx.restore();
      }
    }
  