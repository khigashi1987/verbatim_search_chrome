$(function() {
    $('#submit').click(function() {
        var query = $('#query').val();
        var verbatim_queries = [];
        query.split(' ').forEach( function( q ) {
            verbatim_queries.push('"' + q + '"');
        });
        var verbatim_query = verbatim_queries.join('+')
        var url  = "https://www.google.com/search?q=" + verbatim_query;
        chrome.tabs.create({url: url});
    });
});