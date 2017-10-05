jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
 
jQuery.fn.loadRepositories = function(username) {
    this.html("<h2 id='recup'>Récupération des repos en cours, merci de patienter.</h2>");
     
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);    
     
        var list = $('<div class="container">');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com')) {
                list.append('<div class="box"><div class="box-content"><span class="titre_projets">' 
                    + this.name + '</span> <em>'+(this.language?('('+this.language+')'):'')+'</em>'+'<p>' + this.description +''
                    +'<div class="box-footer"><a href="'+ (this.homepage?this.homepage:this.html_url) +'" class="button">Voir le projet<div>');
            }
        });      
      });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};