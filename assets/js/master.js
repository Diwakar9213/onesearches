
$('#add_fontForm').submit(function(event){
    alert('Fonts Inserted Successfully')
    })
  
  // Axios
  
  // Add User
  $('#add_fontForm').submit(function(event){
    alert('Inserted Fonts Successfully')
  })
  
  // Update Fonts
  $('#update_fontForm').submit(function(event){
    
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
  
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
  
    console.log(data)
  
    var request = {
        "url" : `http://localhost:8080/api/fontsgallery/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
  
    $.ajax(request).done(function(response){
        alert('Fonts Udpated Successfully')
        window.location.href = "http://localhost:8080/webfonts/"
    })
    
  })


  // Delete Fonts
  
  if(window.location.pathname == '/webfonts'){
    $ondelete = $('.table tbody tr td a.delete');
    
    $ondelete.click(function(){
      console.log('Working')
        
        var id = $(this).attr('data-id')
  
        var request = {
            "url" : `http://localhost:8080/api/fontsgallery/${id}`,
            "method": 'DELETE'
        }
  
        if(confirm("Do you want to delete it?")){
            $.ajax(request).done(function(response){
                
                alert("Font was deleted successfully");
                window.location.href = "/webfonts"
            })
        }
    })
  }
  
   // Delete Colors
  
   if(window.location.pathname == '/webcolor'){
    $ondelete = $('.table tbody tr td a.delete');
    
    $ondelete.click(function(){
      console.log('Working')
        
        var id = $(this).attr('data-id')
  
        var request = {
            "url" : `http://localhost:8080/api/colorsgallery/${id}`,
            "method": 'DELETE'
        }
  
        if(confirm("Do you want to delete it?")){
            $.ajax(request).done(function(response){
                
                alert("Color was deleted successfully");
                window.location.href = "/webcolor"
            })
        }
    })
  }
  
  // Delete Multiple Colors
  
  if(window.location.pathname == '/webmultiplecolor'){
    $ondelete = $('.table tbody tr td a.delete');
    
    $ondelete.click(function(){
      console.log('Working')
        
        var id = $(this).attr('data-id')
  
        var request = {
            "url" : `http://localhost:8080/api/multiplecolorsgallery/${id}`,
            "method": 'DELETE'
        }
  
        if(confirm("Do you want to delete it?")){
            $.ajax(request).done(function(response){
                
                alert("Multiple Colors was deleted successfully");
                window.location.href = "/webmultiplecolor"
            })
        }
    })
  }
  
  // Delete Photoshop Brushes
  
  if(window.location.pathname == '/photoshop-brushes'){
    $ondelete = $('.table tbody tr td a.delete');
    
    $ondelete.click(function(){
      console.log('Working')
        
        var id = $(this).attr('data-id')
  
        var request = {
            "url" : `http://localhost:8080/api/photoshopbrushgallery/${id}`,
            "method": 'DELETE'
        }
  
        if(confirm("Do you want to delete it?")){
            $.ajax(request).done(function(response){
                
                alert("Brush was deleted successfully");
                window.location.href = "/photoshop-brushes"
            })
        }
    })
  }

  // Update Colors
  $('#update_colors').submit(function(event){
    
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
  
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
  
    console.log(data)
  
    var request = {
        "url" : `http://localhost:8080/api/colorsgallery/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
  
    $.ajax(request).done(function(response){
        alert('Color Udpated Successfully')
        window.location.href = "http://localhost:8080/webcolor"
    })
    
  })

  // Update Multiple Colors
  $('#update_multipleColors').submit(function(event){
    
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
  
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
  
    console.log(data)
  
    var request = {
        "url" : `http://localhost:8080/api/multiplecolorsgallery/${data.id}`,
        "method" : "PUT",
        "data" : data
    }
  
    $.ajax(request).done(function(response){
        alert('Multiple Colors Udpated Successfully')
        window.location.href = "/webmultiplecolor"
    })
    
  })