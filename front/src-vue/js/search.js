var app = new Vue({
    el: '#app',
    data: {
        organization: 0,
        searchWord:"",
        song_lists: []
    },
    
    methods: {
        onLoadSongs: function(){
            $.ajax({
                url : 'http://localhost:3000/api/v1/',
                type : 'POST',
                dataType: 'json',
                data:{"word":this.searchWord}
                //jsonp: 'callback',
                //jsonpCallback: 'test_song_list'
            }).done(function(data, textStatus, jqXHR){
                console.log(data);
                this.song_lists = data;
            }.bind(this)).fail(function(jqXHR, textStatus, errorThrown){
                console.log("通信失敗");
            });
        }
        
    }
});