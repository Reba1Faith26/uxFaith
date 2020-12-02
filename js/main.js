function landing(){
    $(".landing-page").slideDown(300,function(){
        
        $(".welcome-caption").animate(
            {
                marginTop : '50px'
            }
        ,500);

        $(".multimedia-caption").animate({
            marginLeft : '0px'
        },1700)

        $(".services-wrapper").animate({
            marginRight : '0px'
        },1700)

        $(".button-wrapper-one").animate({
            marginLeft : '0px'
        },1700)

        $(".button-wrapper-two").animate({
            marginRight : '0px'
        },1700)
        //happens when the services button is basically clicked
        $(".work-button").click(function(){

            $(".welcome-caption").animate(
                {
                    marginLeft : '-600px'
                }
            ,700,function(){
                $(".welcome-caption").fadeIn(function(){
                    var welcome = document.getElementsByClassName("welcome-caption");
                    welcome[0].innerText = "Our Portfolio";
                    welcome[0].style.color = "white";
                });

                $(".welcome-caption").animate({
                    marginLeft : '0px'
                },1300)

            });
            
            $(".multimedia-caption").animate({
                marginLeft : '-600px'
            },900)
            
            $(".services-wrapper").animate({
                marginLeft : '-600px'
            },1200);

            $(".button-wrapper-one").animate({
                marginLeft : '-400px'
            },1200)

            $(".button-wrapper-two").animate({
                marginLeft : '-600px'
            },1200)

            
            $(".portfolio-wrapper").animate({
                marginTop : '-130px'
            },1400,function(){
                $(".portfolio-wrapper").animate({
                    marginLeft : '0px'
                },1000)
            });

        })

    });
    //back button coding start here 
    $(".home-btn").click(function(){
        $(".portfolio-wrapper").animate({
            marginLeft : '-600px'
        },700)
        
        $(".welcome-caption").animate({
            marginLeft : '-600px'
        },1700)

        //coding for the home page when  the back button is clicked start here
        var welcomeCaption = document.getElementsByClassName("welcome-caption");
        welcomeCaption[0].innerText = "Welcome To \n Faith Seasons Designs";
        $(".welcome-caption").animate(
            {
                marginLeft : '0px'
            }
        );


        $(".multimedia-caption").animate({
            marginLeft : '0px'
        },2000)

        $(".services-wrapper").animate({
            marginLeft : "0px"
        },2000)

        $(".button-wrapper-one").animate({
            marginLeft : '0px'
        },1700)

        $(".button-wrapper-two").animate({
            marginLeft : '0px'
        },1700)
        //coding for the home page when the back button is clicked ended here
    })
}
