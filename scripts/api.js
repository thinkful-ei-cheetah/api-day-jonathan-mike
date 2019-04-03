'use strict';

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mike-jonathan';
  const getItems = function() {

    return fetch(BASE_URL+'/items')
      .then(response => {
        return response;
      });

  };

  const createItem = function (name){
      const newItem = {
        name: name
      };

      return fetch(BASE_URL+'/items', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });


  };

  return {
    getItems,
    createItem
  };

}());


