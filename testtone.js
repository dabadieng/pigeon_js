function go() {    
    //1 à 100 : durée du début du son
    tones.attack=1;
    //1 à 100 : durée de fin du son
    tones.release=100;
    //0.0 à 1.0 : intensité du son 
    tones.volume=1;
    //-1 : gauche, 0 : stéréo; +1 droite
    tones.panValue=0.5;
    /**
     * tones.play(frequence)
     */    
    tones.play("c");
    tones.play("d");
    tones.play("e");
}