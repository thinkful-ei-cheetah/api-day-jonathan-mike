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
      // eslint-disable-next-line quotes
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    });


  };

  const updateItem = function (id, updateData){

    return fetch(BASE_URL+'/items/'+id, {
      // eslint-disable-next-line quotes
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateData)
    });

  };

  return {
    getItems,
    createItem,
    updateItem
  };

}());


