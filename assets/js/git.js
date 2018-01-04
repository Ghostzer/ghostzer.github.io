jQuery.githubUser = function(username, callback) {
   jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
 
jQuery.fn.loadRepositories = function(username) {
    this.html("<h2 id='recup'>Please wait while we retrieve repos...</h2>");
     
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);    
     
        var list = $('<div class="container">');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com')) {
                list.append('<div class="box"><div class="box-content"> < <a class="project_title" href="'+ (this.homepage?this.homepage:this.html_url) +'"><span>' 
                    + this.name + '</span></a> /> <em>'+(this.language?('('+this.language+')'):'')+'</em>'+'<p>' + this.description +''
                    +'');
            }
        });      
      });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};