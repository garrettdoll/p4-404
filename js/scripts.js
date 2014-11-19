 $(document).ready(function(){

        ion.sound({
            sounds: [
                {name: "horn"},
            ],
            path: "sounds/",
            preload: true,
            volume: 1.0
        });

        $(".loser").on("click", function(){
            ion.sound.play("horn");
        });

    });