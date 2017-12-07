'use strict';

let articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    
    let authorName, category, optionTag;
    if (!$(this).hasClass('template')) {
 
      authorName = $(this).attr('data-author');

  
      optionTag = `<option value="${authorName}">${authorName}</option>`;

      if ($('#author-filter option[value="' + authorName + '"]').length === 0) {
        $('#author-filter').append(optionTag);
      }

   
      category = $(this).attr('data-category');

   
      optionTag = `<option value=${category}>${category}</option>`;

      if ($('#category-filter option[value="' + category + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
 
    if ($(this).val()) {


        console.log($(this).val())
        $('article').hide();
        $(`article[data-author="${$(this).val()}"]`).show();
         

    } else {
     
      $('article').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
 
    if ($(this).val()) {

        $('article').hide();
        $(`article[data-category=${$(this).val()}]`).show();
         

    } else {

      $('article').hide();
    }
    $('#category-filter').val('');
  });


};

articleView.handleMainNav = function() {
  $('.icon-address-book').on('click', function(e) {

        $('.tab-content').hide(350);
        
        $(`#about`).show(350);
         

   
  });
  $('.icon-home').on('click', function(e) {
    
      
            $('.tab-content').show(350);
            
            $(`#about`).hide(350);

  });
             
  
  $('.main-nav .tab:first').click();
}

articleView.setTeasers = function() {
 
  $('.article-body *:nth-of-type(n+2)').hide();

  $('.read-on').on('click', function(e) {
    
    console.log($(this).parent());
    let currentArticle = $(this)[0].parentElement;
    $(currentArticle).addClass('user-read');
    $('.user-read').show();

    $(`.user-read .article-body *:nth-of-type(n+2)`).show();

    $(`.user-read .read-on`).hide();
            
           

  });
             

  



};

$(document).ready(function() {
 articleView.populateFilters();
 articleView.handleAuthorFilter();
 articleView.handleCategoryFilter();
 articleView.handleMainNav();
 articleView.setTeasers();

});
