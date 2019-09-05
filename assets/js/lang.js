$(function() {

  var t = {
    "Home": {
      fr: "Accueil",
    },
    "Projects Git": {
      fr: "Projets Git",
    },
    "Resume": {
      fr: "CV",
    },
    "Hello, my name is Richard, better known as Ghostzer.": {
      fr: "Salut, moi c'est Richard, plus connu sous le nom Ghostzer."
    },
    "Fullstack Developer, I develop all kinds of applications. I mainly use Delphi but also C#, the web triplet HTML/CSS/JS, NodeJS, PHP, JAVA... I also use frameworks like Symfony, Slim, CakePHP or Framework7 for hybrid application development (desktop, android, ios).": {
      fr: "Développeur fullstack, je développe toute sorte d'applications. J'utilise principalement Delphi mais aussi C#, le triplet web HTML/CSS/JS, NodeJS, PHP, JAVA... J'utilise aussi des framework comme Symfony, Slim, CakePHP ou encore Framework7 pour le développement d'application hybride (desktop, android, ios)."
    },
    "Apart from that, I practice motorcycling and photography.": {
      fr: "En dehors de ça, j'aime la photographie et je pratique la moto."
    }
  };
  var _t = $('body').translate({lang: "en", t: t});
  // var str = _t.g("translate");
  
  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    ev.preventDefault();
  });

});